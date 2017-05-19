let gulp = require('gulp');
let rollup = require('rollup').rollup;
let nodeResolve = require('rollup-plugin-node-resolve');
let commonjs = require('rollup-plugin-commonjs');
let uglify = require('rollup-plugin-uglify');
let rollupAngular = require('rollup-plugin-angular');
let rollupTypescript = require('rollup-plugin-typescript');
let typescript = require('typescript');
let del = require('del');
let argv = require('yargs').argv;
let vendorUtils = require('./vendorBuildUtils');

let prodMode = argv.prod;

let commonJsLibs = ['node_modules/rxjs/**', 'node_modules/thenby/**'];

//************************************************************
//*************************** APP ****************************
//************************************************************
let rollupApp = gulp.series(
    function cleanApp() {
        return del(['dist/app.js', 'dist/app.js.map'])
    },
    function buildApp() {
        let devPlugins = [
            rollupAngular(),
            rollupTypescript({typescript: typescript}),
        ];

        let prodPlugins = [
            nodeResolve({jsnext: true}),
            commonjs({include: commonJsLibs}),
            uglify()
        ];

        let rollupConfig = {
            entry: prodMode ? 'src/main.prod.js' : 'src/main.dev.ts',
            plugins: prodMode ? prodPlugins : devPlugins,
            external: prodMode ? [] : vendorUtils.getModules(),
            onwarn: onWarn
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                return bundle.write({
                    format: 'iife',
                    dest: `dist/app.js`,
                    sourceMap: !prodMode,
                    globals: prodMode ? {} : vendorUtils.getModuleToGlobalMap()
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
);


//************************************************************
//************************** VENDOR **************************
//************************************************************
let vendorRollUpBundle;
let rollupVendor = gulp.series(
    function cleanVendor() {
        return del(['dist/vendor.js', 'dist/vendor.js.map'])
    },
    function buildVendor() {
        let rollupConfig = {
            entry: 'src/vendor.ts',
            cache: vendorRollUpBundle,
            plugins: [
                rollupTypescript({typescript: typescript}),
                nodeResolve({jsnext: true}),
                commonjs({include: commonJsLibs})
            ],
            onwarn: onWarn
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                vendorRollUpBundle = bundle;

                return bundle.write({
                    format: 'iife',
                    moduleName: 'vendor',
                    dest: `dist/vendor.js`,
                    sourceMap: !prodMode
                });
            });
    }
);


//************************************************************
//*************************** TEST ***************************
//************************************************************
let testRollUpBundle;
let rollupTest = gulp.series(
    function buildRollupApp() {
        let rollupConfig = {
            entry: 'test/main.ts',
            cache: testRollUpBundle,
            plugins: [
                rollupTypescript({typescript: typescript}),
                nodeResolve({jsnext: true}),
                commonjs({include: commonJsLibs})
            ],
            external: prodMode ? [] : vendorUtils.getModules(),
        };

        return rollup(rollupConfig)
            .then((bundle) => {
                testRollUpBundle = bundle;

                return bundle.write({
                    format: 'iife',
                    dest: `dist-test/app-test.js`,
                    sourceMap: true,
                    globals: prodMode ? {} : vendorUtils.getModuleToGlobalMap()
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
);


function onWarn(warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
    }
    console.warn(warning.message);
}


module.exports = {
    rollupApp,
    rollupVendor,
    rollupTest
};