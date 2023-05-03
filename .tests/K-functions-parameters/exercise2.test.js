// Import the divide function from exercise2.js
const { divide } = require('../../K-functions-parameters/exercise2.js');

// Describe the divide function test
describe('divide function', () => {
  // Test the divide function by passing in two numbers and checking if the result is correct
  test('returns the correct division of two numbers', () => {
    const a = 10;
    const b = 5;
    const expected = a / b;
    const result = divide(a, b);
    expect(result).toBe(expected);
  });
});

