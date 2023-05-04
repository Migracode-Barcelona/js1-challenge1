// Import the function to be tested
const { halve } = require('../../J-functions/exercise.js');

describe('halve', () => {
  it('should return the correct result when called with a positive number', () => {
    const result = halve(10);
    expect(result).toEqual(5);
  });

  it('should return the correct result when called with a negative number', () => {
    const result = halve(-20);
    expect(result).toEqual(-10);
  });
});