let fs = require('fs');
let path = require('path');

function getModules() {
    let modules = require('../src/vendorModules.json');
    delete require.cache[require.resolve('../src/vendorModules.json')];
    return modules;
}

function getModuleToCamelMap() {
    let modules = getModules();
    let map = {};
    modules.forEach(m => map[m] = toCamelCase(m));
    return map;
}

function getModuleToGlobalMap() {
    let modules = getModules();
    let map = {};
    modules.forEach(m => map[m] = `vendor.${toCamelCase(m)}`);
    return map;
}

function generateVendorEntryPoint() {
    let modules = getModules();
    let map = getModuleToCamelMap();
    let content = '';

    modules.forEach(m => {
        content += `import * as ${map[m]} from '${m}';\n`;
    });

    content += `export default {\n`;

    modules.forEach(m => {
        content += `    ${map[m]},\n`;
    });

    content += `};`;

    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, '../src/vendor.ts'), content, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

//taken from http://stackoverflow.com/a/32604073/373655
function toCamelCase(str) {
    // Lower cases the string
    return str.toLowerCase()
    // Replaces any -, _, or / characters with a space
        .replace(/[-_/]+/g, ' ')
        // Removes any non alphanumeric characters
        .replace(/[^\w\s]/g, '')
        // Uppercases the first character in each group immediately following a space
        // (delimited by spaces)
        .replace(/ (.)/g, function ($1) {
            return $1.toUpperCase();
        })
        // Removes spaces
        .replace(/ /g, '');
}

module.exports = {
    getModules,
    getModuleToCamelMap,
    getModuleToGlobalMap,
    generateVendorEntryPoint
};
