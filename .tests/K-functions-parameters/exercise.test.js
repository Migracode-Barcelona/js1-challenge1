const { multiply } = require('../../K-functions-parameters/exercise.js');

describe('multiply function', () => {
  test('returns the correct multiplication of two numbers', () => {
    const a = 3;
    const b = 4;
    const expected = a * b;
    const result = multiply(a, b);
    expect(result).toBe(expected);
  });
});
