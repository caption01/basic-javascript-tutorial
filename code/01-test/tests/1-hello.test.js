const { helloWorld } = require('../1-hello')

describe('Testing helloWorld Suites', () => {

    test('need to return exactly string hello', () => {
        const output = helloWorld()
        expect(output).toBe('hello');
    });
})

