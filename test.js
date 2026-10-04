<<<<<<< HEAD

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => res.send('Hello from Express App'));

const server = app.listen(5000, () => {
    console.log('Server started, running smoke test...');

    http.get('http://localhost:5000/', (res) => {
        console.log(`Status: ${res.statusCode}`);

        if (res.statusCode === 200) {
            console.log('Smoke test passed');
            server.close();
            process.exit(0);
        } else {
            server.close();
            process.exit(1);
        }
    }).on('error', (err) => {
        console.error('Request failed:', err.message);
        server.close();
        process.exit(1);
=======
// Assuming there's a bug in the test file that causes tests to fail

const assert = require('assert');
const myFunction = require('./myFunction');

describe('My Function Tests', () => {
    it('should return true for valid input', () => {
        const result = myFunction('validInput');
        assert.strictEqual(result, true);
>>>>>>> e8cf557cc1a55d880cc82d79f279d0bd55fa3b22
    });

    it('should throw an error for invalid input', () => {
        assert.throws(() => myFunction('invalidInput'), Error);
    });
});
