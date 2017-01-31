let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let rev = require('gulp-rev');
let inject = require('gulp-inject');
let exec = require('child_process').exec;
let argv = require('yargs').argv;
let del = require('del');
let browserSync = require('browser-sync').create();
let jasmineBrowser = require('gulp-jasmine-browser');
let gutil = require('gulp-util');
let vendorUtils = require('./gulp/vendorBuildUtils');
let {rollupApp, rollupVendor, rollupTest} = require('./gulp/rollupTasks');

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

function jasmineTest() {
    return gulp.src(['dist/global-*.js', 'dist/vendor-*.js', 'dist-test/**'])
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless())
        //jasmineBrowser.headless() returns a lazy pipe which doesn't work with gulp 4 unless there is another pipe after it.
        //http://stackoverflow.com/a/40101404/373655
        .pipe(gutil.noop());
}

gulp.task('componentStyles', componentStyles);
gulp.task('ngc', ngc);
gulp.task('vendor', rollupVendor);
gulp.task('rollupApp', rollupApp);
gulp.task('globalJs', globalJs);
gulp.task('globalSass', globalSass);
gulp.task('index', index);

let appJs;
let build;
if (prodMode) {
    //TODO: setup unit testing build for prod
    appJs = gulp.series(componentStyles, ngc, rollupApp);
    build = gulp.series(clean, gulp.parallel(appJs, globalJs, globalSass, resources), index);
} else {
    appJs = gulp.series(componentStyles, rollupApp);
    build = gulp.series(
        clean,
        vendorUtils.generateVendorEntryPoint,
        gulp.parallel(appJs, globalJs, globalSass, rollupVendor, rollupTest, resources),
        gulp.parallel(jasmineTest, index)
    );
}

gulp.task('build', build);

gulp.task('default', gulp.series(build, function watch() {
    let componentStylePaths = ['src/**/*.scss', '!src/globalSass/**'];
    let componentTemplatePaths = ['src/**/*.html', '!src/index.html'];

    //Need to use polling because of this issue https://github.com/paulmillr/chokidar/issues/328
    gulp.watch(
        ['src/**/*.ts', '!src/vendor.ts', ...componentStylePaths, ...componentTemplatePaths],
        {usePolling: true},
        gulp.series(
            gulp.parallel(appJs, rollupTest),
            gulp.parallel(jasmineTest, gulp.series(index, reloadBrowser))
        )
    );
    gulp.watch('src/globalSass/**/*.scss', {usePolling: true}, gulp.series(globalSass, index, reloadBrowser));
    gulp.watch('src/index.html', gulp.series(index, reloadBrowser));

    gulp.watch('test/specs/**/*.spec.ts', gulp.series(rollupTest, jasmineTest));

    if(!prodMode) {
        gulp.watch('src/vendorModules.json', gulp.series(vendorUtils.generateVendorEntryPoint, rollupVendor, index, reloadBrowser, jasmineTest));
    }

    browserSync.init(null, {
        proxy: 'localhost:5000'
    });
}));