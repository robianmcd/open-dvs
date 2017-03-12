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
let uglify = require('gulp-uglify');
let {rollupApp, rollupVendor, rollupTest} = require('./gulp/rollupTasks');
let plumber = require('gulp-plumber');

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

        let stream = gulp.src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.min.js',
            'node_modules/hammerjs/hammer.js',
            'lib/jsmediatags/jsmediatags.min.js'
        ])
            .pipe(concat('global.js'));

        prodMode && (stream = stream.pipe(uglify()));

        return stream.pipe(gulp.dest('dist'));
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
            .pipe(gulp.dest('dist'));
    }
);

let resourcePaths = ['src/**/*.ico', 'src/**/*.svg', 'src/**/*.eot', 'src/**/*.ttf', 'src/**/*.woff', 'workers/**/*.js'];
//Add anything that just needs to be copied into the dist folder here
let resources = function () {
    return gulp.src(resourcePaths)
        .pipe(gulp.dest('dist'));
};


function index() {
    //vendor*.js will only exist in dev mode. In prod it will be rolled up into the app so rollup can apply treeshaking
    let srcStream = gulp.src(['dist/global.js', 'dist/vendor*.js', 'dist/app.js', 'dist/global.css'], {read: false});

    return gulp.src('src/index.html')
        .pipe(inject(srcStream, {addRootSlash: false, ignorePath: 'dist'}))
        .pipe(gulp.dest('dist'));
}

function clean() {
    return del(['dist', 'src/**/*.css', 'src/**/*.js', 'src/**/*.js.map', 'src/**/*.ngsummary.json', 'src/**/*.ngstyle.ts', 'src/**/*.ngfactory.ts']);
}

function reloadBrowser(done) {
    browserSync.reload();
    done();
}

function runTests() {
    let headless = jasmineBrowser.headless();
    headless.on('error',function(){
        headless.end();
    });

    return gulp.src(['dist/global.js', 'dist/vendor.js', 'dist-test/**'])
        .pipe(plumber())
        //Uncomment the next two lines if you want to debug tests in a browser
        //.pipe(jasmineBrowser.specRunner())
        //.pipe(jasmineBrowser.server({port: 8888}))
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(headless)
        //jasmineBrowser.headless() returns a lazy pipe which doesn't work with gulp 4 unless there is another pipe after it.
        //http://stackoverflow.com/a/40101404/373655
        .pipe(gutil.noop());
}

function runTestsInBrowser() {
    return gulp.src(['dist/global.js', 'dist/vendor.js', 'dist-test/**'])

        .pipe(gutil.noop());
}

gulp.task('clean', clean);
gulp.task('componentStyles', componentStyles);
gulp.task('ngc', ngc);
gulp.task('vendor', rollupVendor);
gulp.task('rollupApp', rollupApp);
gulp.task('globalJs', globalJs);
gulp.task('globalSass', globalSass);
gulp.task('index', index);
gulp.task('test', runTestsInBrowser);

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
        gulp.parallel(runTests, index)
    );
}

gulp.task('build', build);

gulp.task('default', gulp.series(build, function watch() {
    let componentStylePaths = ['src/**/*.scss', '!src/globalSass/**/*.scss'];
    let componentTemplatePaths = ['src/**/*.html', '!src/index.html'];

    //Need to use polling because of this issue https://github.com/paulmillr/chokidar/issues/328
    gulp.watch(
        ['src/**/*.ts', '!src/vendor.ts', ...componentStylePaths, ...componentTemplatePaths],
        {usePolling: true},
        gulp.series(
            //Disabling tests for now as they aren't testing much and take a while
            gulp.parallel(appJs/*, rollupTest*/),
            gulp.parallel(/*runTests, */reloadBrowser)
        )
    );
    gulp.watch('src/globalSass/**/*.scss', {usePolling: true}, gulp.series(gulp.parallel(globalSass, appJs), reloadBrowser));
    gulp.watch('src/index.html', gulp.series(index, reloadBrowser));
    gulp.watch(resourcePaths, gulp.series(resources, reloadBrowser));

    gulp.watch('test/**/*.spec.ts', gulp.series(rollupTest, runTests));

    if(!prodMode) {
        gulp.watch('src/vendorModules.json', gulp.series(vendorUtils.generateVendorEntryPoint, rollupVendor, reloadBrowser, runTests));
    }

    browserSync.init(null, {
        proxy: 'localhost:5000'
    });
}));