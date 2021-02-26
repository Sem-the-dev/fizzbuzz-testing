const fizzbuzz = require('./fizzbuzz');

describe('tests for fizzbuzz', () => {
    let fizzbuzzFunction = fizzbuzz.fizzbuzz;

    test('should be a function', () => {
        expect(fizzbuzzFunction).toBeDefined();
    });

    test('should return FizzBuzz when number is divisible by 3 and 5', () => {
        expect(fizzbuzzFunction(15)).toEqual("FizzBuzz");
    });

    test('should return Fizz when number is divisible by 3', () => {
        expect(fizzbuzzFunction(9)).toEqual("Fizz");
    });

    test('should return Buzz when number is divisible by 5', () => {
        expect(fizzbuzzFunction(10)).toEqual("Buzz");
    })

    test('should return num when not divisible by 3 or 5', () => {
        expect(fizzbuzzFunction(17)).toEqual(17);
    })

    test('should return num when not divisible by 3 or 5 - even with string!', () => {
        expect(fizzbuzzFunction("hello")).toEqual("hello");
    })
});