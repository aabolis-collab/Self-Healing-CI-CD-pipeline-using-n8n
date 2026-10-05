const assert = require('assert');

describe('Sample Test', function() {
    it('should return true for valid input', function() {
        const input = true;
        assert.strictEqual(input, true);
    });
    it('should throw an error for invalid input', function() {
        const input = null;
        assert.throws(() => {
            if (input === null) throw new Error('Invalid input');
        }, /Invalid input/);
    });
});