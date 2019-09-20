const _ = require('lodash');

const vol = (l, b) => l * b;

// const cur = _.curry(vol);

// console.log(cur(20)(30));
// console.log(cur(20, 30));

// var curry = (fn, ...args) =>
//   fn.length <= args.length
//     ? fn(...args)
//     : (...moreArgs) => curry(fn, ...args, ...moreArgs);

let testCurry = curry(vol);
console.log(testCurry(10)(20));
