// Import the function to be tested
const { halve } = require('../../J-functions/exercise2.js');

describe('triple', () => {
  it('should return the correct result when called with a positive number', () => {
    const result = triple(5);
    expect(result).toEqual(15);
  });

  it('should return the correct result when called with a negative number', () => {
    const result = triple(-4);
    expect(result).toEqual(-12);
  });
});