const processList = require('./task.js');

test('Removes items at positions which are a multiple of 2 or 3', () => {
  expect(processList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).toEqual([2, 6, 8, 12, 14, 18, 20]);
});

test('Removes items at positions which are a multiple of 2 or 3', () => {
  expect(processList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 6, 8]);
});

test('Throws an error if the input list is not a multiple of 10 in length', () => {
  expect(() => processList([1, 2, 3])).toThrow('Error: Input list must be a multiple of 10 in length.');
});

