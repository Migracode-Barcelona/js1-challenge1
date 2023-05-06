// Import the function to be tested
const { greetingMentors } = require('../../L-functions-nested/exercise.js');

describe('greetingMentors', () => {
  it('should log the correct greeting message to the console', () => {
    // Mock the console.log method
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Call the function to be tested
    const name = 'Daniel';
    greetingMentors(name);

    // Check if the console.log method was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith(`HELLO ${name.toUpperCase()}`);

    // Restore the console.log method
    consoleSpy.mockRestore();
  });
});
