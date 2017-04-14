let fs = require('fs');


let promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, res) => {
                (err) ? reject(err) : resolve(res);
            });
        });
    };
};


module.exports = Object.assign(
    Object.create(null),
    Object.entries(fs)
      .map(([key, val]) => [key, (typeof val === 'function') ? promisify(val) : val])
      .reduce((r, [key, val]) => Object.assign(r, { [key]: val }), {})
);