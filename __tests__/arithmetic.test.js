'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic functions', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(arithmetic.add([1, 2])).toBe(3);
  });

  it('subtract 1 - 2 to equal -1', () => {
    expect(arithmetic.subtract([1, 2])).toBe(-1);
  });

  it('multiply 3 + 2 to equal 3', () => {
    expect(arithmetic.multiply([3, 2])).toBe(6);
  });

  it('divide 9 by 3 to equal 3', () => {
    expect(arithmetic.divide(9, 3)).toBe(3);
  });
});
