const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 5', () => {
  expect(sum(2, 2)).toBe(5);
});

test('adds 3 + 3 to equal 6', () => {
  expect(sum(3, 3)).toBe(6);
});

test('adds 4 + 4 to equal 8', () => {
  expect(sum(4, 4)).toBe(8);
});