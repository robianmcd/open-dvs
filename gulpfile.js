let gulp = require('gulp');
let rollup = require('rollup').rollup;
let nodeResolve = require('rollup-plugin-node-resolve');
let commonjs = require('rollup-plugin-commonjs');
let uglify = require('rollup-plugin-uglify');
let rollupAngular = require('rollup-plugin-angular');
let rollupTypescript = require('rollup-plugin-typescript');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let rev = require('gulp-rev');
let inject = require('gulp-inject');
let exec = require('child_process').exec;
let argv = require('yargs').argv;
let del = require('del');
let typescript = require('typescript');
let browserSync = require('browser-sync').create();
let jasmineBrowser = require('gulp-jasmine-browser');
let gutil = require('gulp-util');
let vendorUtils = require('./gulp/vendorBuildUtils');

let prodMode = argv.prod;

//Build TODOs
//vendor css
//vendor JS. e.g. moment
//css source maps
//js source maps
//Live reload
//exit on error in build mode. not in watch mode

function componentStyles() {
    let sassOptions = {outputStyle: prodMode ? 'compressed' : 'nested'};

    return gulp.src(['src/**/*.scss', '!src/globalSass/**'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('src'));
}

function ngc(done) {
    exec('"node_modules/.bin/ngc" -p "tsconfig.prod.json"', function (error, stdout, stderr) {
        stdout && console.log(stdout);
        stderr && console.error(stderr);
        done();
    });
}

let vendorRollUpBundle;
let rollupVendor = gulp.series(
    function cleanVendor() {
        return del(['dist/vendor*.js', 'dist/vendor*.js.map'])
    },
    function buildVendor() {
        let rollupConfig = {
            entry: 'src/vendor.ts',
            cache: vendorRollUpBundle,
            plugins: [
                rollupTypescript({typescript: typescript}),
                nodeResolve({jsnext: true}),
                commonjs({include: 'node_modules/rxjs/**'})
            ],
            onwarn: function (warning) {
                if (warning.code === 'THIS_IS_UNDEFINED') {
                    return;
                }
                console.warn('rollupwarn', warning.message);
            }
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                vendorRollUpBundle = bundle;

                return bundle.write({
                    format: 'iife',
                    moduleName: 'vendor',
                    dest: `dist/vendor-${Date.now().toString(36)}.js`,
                    sourceMap: true
                });
            });
    }
);

let rollupApp = gulp.series(
    function cleanRollupJs() {
        return del(['dist/app*.js', 'dist/app*.js.map'])
    },
    function buildRollupApp() {
        let devPlugins = [
            rollupAngular(),
            rollupTypescript({typescript: typescript}),
        ];

        let prodPlugins = [
            nodeResolve({jsnext: true}),
            commonjs({include: 'node_modules/rxjs/**'}),
            uglify()
        ];

        let rollupConfig = {
            entry: prodMode ? 'src/main.prod.js' : 'src/main.dev.ts',
            plugins: prodMode ? prodPlugins : devPlugins,
            external: prodMode ? [] : vendorUtils.getModules(),
            onwarn: function (warning) {
                if (warning.code === 'THIS_IS_UNDEFINED') {
                    return;
                }
                console.warn(warning.message);
            }
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                return bundle.write({
                    format: 'iife',
                    dest: `dist/app-${Date.now().toString(36)}.js`,
                    sourceMap: !prodMode,
                    globals: prodMode ? {} : vendorUtils.getModuleToGlobalMap()
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
);

let globalJs = gulp.series(
    function cleanGlobalJs() {
        return del('dist/global*.js')
    },
    function BuildGlobalJs() {

        return gulp.src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.min.js',
            'node_modules/hammerjs/hammer.js',
            'lib/jsmediatags/jsmediatags.min.js'
        ])
            .pipe(concat('global.js'))
            .pipe(rev())
            .pipe(gulp.dest('dist'));
    }
);

let globalSass = gulp.series(
    function cleanGlobalSass() {
        return del('dist/global*.css')
    },
    function BuildGlobalSass() {
        let sassOptions = {outputStyle: prodMode ? 'compressed' : 'nested'};

        return gulp.src('src/globalSass/global.scss')
            .pipe(sass(sassOptions).on('error', sass.logError))
            .pipe(rev())
            .pipe(gulp.dest('dist'));
    }
);

//Add anything that just needs to be copied into the dist folder here
let resources = function () {
    return gulp.src(['src/**/*.ico'])
        .pipe(gulp.dest('dist'));
};


function index() {
    //vendor*.js will only exist in dev mode. In prod it will be rolled up into the app so rollup can apply treeshaking
    let srcStream = gulp.src(['dist/global*.js', 'dist/vendor*.js', 'dist/app*.js', 'dist/global*.css'], {read: false});

    return gulp.src('src/index.html')
        .pipe(inject(srcStream, {addRootSlash: false, ignorePath: 'dist'}))
        .pipe(gulp.dest('dist'));
}

function clean() {
    return del('dist');
}

function reloadBrowser(done) {
    browserSync.reload();
    done();
}

function watchTest() {
    gulp.watch(['test/**/*.spec.js'], test);
}

function test() {
    return gulp.src(['test/utils/moduleMocks.js', 'dist-test/**'])
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless())
        //jasmineBrowser.headless() returns a lazy pipe which doesn't work with gulp 4 unless there is another pipe after it.
        //http://stackoverflow.com/a/40101404/373655
        .pipe(gutil.noop());
}

let testRollUpBundle;
let rollupTestApp = gulp.series(
    function buildRollupApp() {
        let rollupConfig = {
            entry: 'test/main.ts',
            cache: testRollUpBundle,
            plugins: [
                rollupTypescript({typescript: typescript}),
                nodeResolve({jsnext: true}),
                commonjs({include: 'node_modules/rxjs/**'})
            ],
            external: (id) => {
                return id.startsWith('@angular');
            }
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                testRollUpBundle = bundle;

                return bundle.write({
                    format: 'iife',
                    dest: `dist-test/app-test.js`,
                    sourceMap: true
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
);

gulp.task('componentStyles', componentStyles);
gulp.task('ngc', ngc);
gulp.task('vendor', rollupVendor);
gulp.task('rollupApp', rollupApp);
gulp.task('globalJs', globalJs);
gulp.task('globalSass', globalSass);
gulp.task('index', index);
gulp.task('test', gulp.series(rollupTestApp, test));
gulp.task('watchTest', watchTest);

let appJs;
let build;
if (prodMode) {
    appJs = gulp.series(componentStyles, ngc, rollupApp);
    build = gulp.series(clean, gulp.parallel(appJs, globalJs, globalSass, resources), index);
} else {
    appJs = gulp.series(componentStyles, rollupApp);
    build = gulp.series(
        clean,
        vendorUtils.generateVendorEntryPoint,
        gulp.parallel(appJs, globalJs, globalSass, rollupVendor, resources),
        index
    );
}

gulp.task('build', build);

gulp.task('default', gulp.series(build, function watch() {
    let componentStylePaths = ['src/**/*.scss', '!src/globalSass/**'];
    let componentTemplatePaths = ['src/**/*.html', '!src/index.html'];

    //Need to use polling because of this issue https://github.com/paulmillr/chokidar/issues/328
    gulp.watch(['src/**/*.ts', ...componentStylePaths, ...componentTemplatePaths], {usePolling: true}, gulp.series(appJs, index, reloadBrowser));
    gulp.watch('src/globalSass/**/*.scss', {usePolling: true}, gulp.series(globalSass, index, reloadBrowser));
    gulp.watch('src/index.html', gulp.series(index, reloadBrowser));

    if(!prodMode) {
        gulp.watch('src/vendorModules.json', gulp.series(vendorUtils.generateVendorEntryPoint, rollupVendor, index, reloadBrowser));
    }

    browserSync.init(null, {
        proxy: 'localhost:5000'
    });
}));