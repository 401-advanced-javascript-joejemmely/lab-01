'use strict';

const typeCheck = require('./typeCheck');

let arithmetic = (module.exports = {});

arithmetic.add = function(arr) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return null;
  // }
  // return a + b;
  return arr.reduce((sum, cur) => {
    if (typeCheck(cur)) {
      return (sum += cur);
    }
  });
};

arithmetic.subtract = function(arr) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return null;
  // }
  // return a - b;
  return arr.reduce((difference, cur) => {
    if (typeCheck(cur)) {
      return (difference -= cur);
    }
  });
};

arithmetic.multiply = function(arr) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return null;
  // }
  // return a * b;
  return arr.reduce((product, cur) => {
    if (typeCheck(cur)) {
      return product * cur;
    }
  });
};

arithmetic.divide = function(a, b) {
  if (typeCheck(a) || typeCheck(b)) {
    return null;
  } else if (!b)
    console.error('You can\'t divide by zero')
  return a / b;
};
