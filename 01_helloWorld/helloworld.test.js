const { describe } = require('node:test');
const helloworld = require('./helloworld');

describe('Hello world', () => {
    test('say "hello world"', () => {
        expect(helloworld()).toEqual('Hello world');
    })
})