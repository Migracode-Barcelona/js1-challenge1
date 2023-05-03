const { createGreeting } = require('../../K-functions-parameters/exercise3.js');

describe('createGreeting', () => {
  test('returns a personalized greeting message', () => {
    const name = 'Daniel';
    const greeting = createGreeting(name);
    expect(greeting).toContain(name);
  });
});

