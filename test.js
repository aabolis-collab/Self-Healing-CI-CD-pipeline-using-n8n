// Import the necessary modules
const assert = require('assert');
const { myFunction } = require('./myFunction');

// Test suite for myFunction
describe('myFunction Tests', () => {
    it('should return the correct value when input is valid', () => {
        const input = 5;
        const expectedOutput = 25; // Example expected output
        const actualOutput = myFunction(input);
        assert.strictEqual(actualOutput, expectedOutput, 'Output should be 25 when input is 5');
    });

    it('should throw an error for invalid input', () => {
        const input = 'invalid';
        assert.throws(() => myFunction(input), /Invalid input/, 'Function should throw an error for invalid input');
    });
});
