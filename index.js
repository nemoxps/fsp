let fs = require('fs');
let { promisify } = require('util');


let fsp = Object.entries(fs).reduce((r, [key, val]) => {
    r[key] = (typeof val === 'function') ? promisify(val) : val;
    return r;
}, Object.create(null));


module.exports = fsp;