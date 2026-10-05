// test.js

const assert = require('assert');

describe('Sample Test', function() {
    it('should return true', function(done) {
        // Simulating async function
        setTimeout(function() {
            assert.strictEqual(true, true);
            done();  // Ensuring done is called to avoid timeout
        }, 100);
    });
});
