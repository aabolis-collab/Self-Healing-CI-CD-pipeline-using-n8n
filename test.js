// Importing required modules
const assert = require('assert');
const myFunction = require('./myFunction');

// Test Suite
describe('My Function', () => {
    it('should return true for valid input', () => {
        const result = myFunction('valid input');
        assert.strictEqual(result, true);
    });

    it('should throw error for invalid input', () => {
        assert.throws(() => myFunction('invalid input'), Error);
    });
});