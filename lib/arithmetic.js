'use strict';

let arithmetic = (module.exports = {});

arithmetic.add = function(arr) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return null;
  // }
  // return a + b;
  return arr.reduce((sum, cur) => {
    return (sum += cur);
  });
};

arithmetic.subtract = function(arr) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return null;
  // }
  // return a - b;
  return arr.reduce((difference, cur) => {
    return (difference -= cur);
  });
};

arithmetic.multiply = function(arr) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return null;
  // }
  // return a * b;
  return arr.reduce((product, cur) => {
    return product * cur;
  });
};

arithmetic.divide = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  } else if (!b)
    throw new Error(
      `You can't divide by zero https://en.wikipedia.org/wiki/Division_by_zero`
    );
  return a / b;
};
