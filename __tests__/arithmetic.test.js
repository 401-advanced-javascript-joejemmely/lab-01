'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('adds 1 + 2 to equal 3', () => {
  expect(arithmetic.add([1, 2])).toBe(3);
});

test('subtract 1 - 2 to equal -1', () => {
  expect(arithmetic.subtract([1, 2])).toBe(-1);
});

test('multiply 3 + 2 to equal 3', () => {
  expect(arithmetic.multiply([3, 2])).toBe(6);
});

test('divide 9 by 3 to equal 3', () => {
  expect(arithmetic.divide(9, 3)).toBe(3);
});
