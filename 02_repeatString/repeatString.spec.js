const repeatString = require('./repeatString');

describe('repeat strings times', () => {
    test('repeat strings', () => {
        expect(repeatString('hey', 3)).toEqual('heyheyhey');
    })
    test.skip ('repeat stting', () => {
        expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
    })
})