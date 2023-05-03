var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const { execSync } = require('child_process');
const path = require('path');

const exercisePath = path.join(__dirname, '../../L-functions-nested/exercise.js');

const expectedOutput = ['HELLO DANIEL', 'HELLO IRINA', 'HELLO MIMI', 'HELLO ROB', 'HELLO YOHANNES'];

try {
  const output = execSync(`node ${exercisePath}`, { stdio: 'pipe' }).toString().trim().split('\n');

  if (JSON.stringify(output) === JSON.stringify(expectedOutput)) {
    console.log('Test passed!');
  } else {
    console.log(`Test failed. Expected output: ${expectedOutput.join(', ')}. Actual output: ${output.join(', ')}`);
  }
} catch (error) {
  console.error('Test failed.', error);
}