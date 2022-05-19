const { goodBye } = require('../2-goodbye')

describe.skip('Testing Goodbye Suites', () => {

    test('need to return exactly string goodBye', () => {
        const output = goodBye()
        expect(output).toBe('goodBye');
    });
})
