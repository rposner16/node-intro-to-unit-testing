
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should return fizz-buzz, buzz, or fizz depending on whether num is divisible by 15, 5, or 3, and num if none of these is true.', function() {

        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 60, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: 25, expected: 'buzz'},
            {num: 3, expected: 'fizz'},
            {num: 27, expected: 'fizz'},
            {num: 11, expected: 11},
            {num: 17, expected: 17}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise an error if argument is not a number.', function() {

        const badInputs = [true, 'jsdklfj', 'sjlkf', {a: 'jk', b: 8}];

        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });

});