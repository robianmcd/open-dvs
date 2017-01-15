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
    exec('"node_modules/.bin/ngc" -p "tsconfig.prod.json"', function(error, stdout, stderr) {
        stdout && console.log(stdout);
        stderr && console.error(stderr);
        done();
    });
}

let rollUpBundle;
let rollupApp = gulp.series(
    function cleanRollupJs() {return del(['dist/app*.js', 'dist/app*.js.map'])},
    function buildRollupApp() {
        let sharedPlugins = [
            nodeResolve({jsnext: true}),
            commonjs({include: 'node_modules/rxjs/**'})
        ];

        let devPlugins = [
            rollupAngular(),
            rollupTypescript({typescript: typescript}),
            ...sharedPlugins
        ];

        let prodPlugins = [...sharedPlugins, uglify()];

        let rollupConfig = {
            entry: prodMode ? 'src/main.prod.js': 'src/main.dev.ts',
            //cache: rollUpBundle,
            plugins: prodMode ? prodPlugins : devPlugins,
            onwarn: function (warning) {
                if(warning.code === 'THIS_IS_UNDEFINED') {
                    return;
                }
                console.warn(warning.message);
            }
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                rollUpBundle = bundle;

                return bundle.write({
                    format: 'iife',
                    dest: `dist/app-${Date.now().toString(36)}.js`,
                    //TODO look into speeding up the build by not generating source maps for third party dependencies
                    sourceMap: !prodMode
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
);

let globalJs = gulp.series(
    function cleanGlobalJs() {return del('dist/global*.js')},
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
    function cleanGlobalSass() {return del('dist/global*.css')},
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
    let srcStream = gulp.src(['dist/global*.js', 'dist/app*.js', 'dist/global*.css'], {read: false});

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

gulp.task('componentStyles', componentStyles);
gulp.task('ngc', ngc);
gulp.task('rollupApp', rollupApp);
gulp.task('globalJs', globalJs);
gulp.task('globalSass', globalSass);
gulp.task('index', index);

let appJs;
if(prodMode) {
    appJs = gulp.series(componentStyles, ngc, rollupApp);
} else {
    appJs = gulp.series(componentStyles, rollupApp);
}

let build = gulp.series(clean, gulp.parallel(appJs, globalJs, globalSass, resources), index);
gulp.task('build', build);

gulp.task('default', gulp.series(build, function watch() {
    let componentStylePaths = ['src/**/*.scss', '!src/globalSass/**'];
    let componentTemplatePaths = ['src/**/*.html', '!src/index.html'];

    //Need to use polling because of this issue https://github.com/paulmillr/chokidar/issues/328
    gulp.watch(['src/**/*.ts', ...componentStylePaths, ...componentTemplatePaths], {usePolling: true}, gulp.series(appJs, index, reloadBrowser));
    gulp.watch('src/globalSass/**/*.scss', {usePolling: true}, gulp.series(globalSass, index, reloadBrowser));
    gulp.watch('src/index.html', index, reloadBrowser);

    browserSync.init(null, {
        proxy: 'localhost:5000'
    });
}));