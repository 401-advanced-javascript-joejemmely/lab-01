'use strict';

const faker = require('faker');
const greet = require('../lib/greet.js');

const randomName = faker.name.findName();

test('Test with random name', () => {
  expect(greet(randomName)).toBe(`hello ${randomName}`);
});

test('Expect null when non-string are provided', () => {
  expect(greet(1)).toBe(null);
});

test(`Expect 'hello world' when the first argument is 'world'`, () => {
  expect(greet('world')).toBe('hello world');
});
