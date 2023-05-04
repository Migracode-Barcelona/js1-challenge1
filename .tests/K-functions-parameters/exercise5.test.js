const createLongGreeting = require('../../K-functions-parameters/exercise5.js');

describe('createLongGreeting', () => {
    it('should return the correct age greeting message', () => {
      const name = 'John';
      const age = 30;
      const expectedMessage = `Hello, my name is ${name} and I'm ${age} years old`;
      const result = createLongGreeting.createLongGreeting(name, age, createLongGreeting.createLongGreeting);
      expect(result).toEqual(expectedMessage);
    });
  });