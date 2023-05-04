// to do a single test: npm test -- .tests/J-functions/exercise.test.js

describe('exercise', () => {
    test('does not throw an error', () => {
      expect(() => require('../../F-strings-methods/exercise.js')).not.toThrow();
    });
  });
  