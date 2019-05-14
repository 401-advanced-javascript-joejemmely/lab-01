'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('adds 1 + 2 to equal 3', () => {
  expect(arithmetic.add([1, 2])).toBe(3);
});
