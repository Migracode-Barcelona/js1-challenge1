// Import the sum function from the exercise.js file
const sum = require('../../K-functions-parameters/exercise4.js');


describe('sum function', () => {
  // Use the test function to define an individual test case
  test('returns the correct sum of two numbers', () => {

    const a = 3;
    const b = 4;
    
    const expected = a + b;
    const result = sum.sum(a, b);
    
    // Use the expect function to check that the result matches the expected output
    expect(result).toBe(expected);
  });
});

