const CompareNumber = require('../src/CompareNumber');

describe('CompareNumber',function () {
    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1234';
        const checktrue = new CompareNumber(input,answer);
        const expected = '4A0B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1254';
        const checktrue = new CompareNumber(input,answer);
        const expected = '3A0B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1564';
        const checktrue = new CompareNumber(input,answer);
        const expected = '2A0B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '5674';
        const checktrue = new CompareNumber(input,answer);
        const expected = '1A0B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '5678';
        const checktrue = new CompareNumber(input,answer);
        const expected = '0A0B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1354';
        const checktrue = new CompareNumber(input,answer);
        const expected = '2A1B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1527';
        const checktrue =new CompareNumber(input,answer);
        const expected = '1A1B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '2567';
        const checktrue = new CompareNumber(input,answer);
        const expected = '0A1B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1324';
        const checktrue = new CompareNumber(input,answer);
        const expected = '2A2B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1325';
        const checktrue = new CompareNumber(input,answer);
        const expected = '1A2B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '5643';
        const checktrue = new CompareNumber(input,answer);
        const expected = '0A2B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '1423';
        const checktrue = new CompareNumber(input,answer);
        const expected = '1A3B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '2347';
        const checktrue = new CompareNumber(input,answer);
        const expected = '0A3B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- true",function () {
        const input = '1234';
        const answer = '2341';
        const checktrue = new CompareNumber(input,answer);
        const expected = '0A4B';
        expect(checktrue.output()).toEqual(expected);
    });

    it("CompareNumber- flase",function () {
        const input = '1234';
        const answer = '1232';
        const checkflase = new CompareNumber(input,answer);
        const expected = '3A1B';
        expect(checkflase.output()).toEqual(expected);
    });
});