const romanParser = require("../src/RomanParser");

it('should return 1', async() => {
    let number = romanParser.parseRomanNumber("I");
    expect(number).toBe(1);
} );

it('should return 2', async() => {
    let number = romanParser.parseRomanNumber("II");
    expect(number).toBe(2);
} );

it('should return 3', async() => {
    let number = romanParser.parseRomanNumber("III");
    expect(number).toBe(3);
} );

it('should return 4', async() => {
    let number = romanParser.parseRomanNumber("IV");
    expect(number).toBe(4);
} );

it('should return 5', async() => {
    let number = romanParser.parseRomanNumber("V");
    expect(number).toBe(5);
} );

it('should return 7', async() => {
    let number = romanParser.parseRomanNumber("VII");
    expect(number).toBe(7);
} );

it('should return 9', async() => {
    let number = romanParser.parseRomanNumber("IX");
    expect(number).toBe(9);
} );

it('should return 5', async() => {
    let number = romanParser.parseRomanNumber("V");
    expect(number).toBe(5);
} );

it('should return 14', async() => {
    let number = romanParser.parseRomanNumber("XIV");
    expect(number).toBe(14);
} );

it('should return 49', async() => {
    let number = romanParser.parseRomanNumber("IL");
    expect(number).toBe(49);
} );




