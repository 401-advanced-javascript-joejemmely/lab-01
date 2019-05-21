'use strict';
const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');

console.log(greet('JOHN'));
console.log(greet(2));
console.log(math.add([1, 3, 6])); // 10
console.log(math.subtract([1, 3, 6])); // -8
console.log(math.multiply([2, 3, 6])); // 36
console.log(math.divide(9, 3)); // 3
// console.log(math.divide(9, 0)); // 3
