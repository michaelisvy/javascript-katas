const priceService = require("./priceService");

const ONE = 8;
const TWO = ONE * 0.95 * 2;
const THREE = ONE * 0.9 * 3;
const FOUR = ONE * 0.8 * 4;
const FIVE = ONE * 0.75 * 5;

describe('Should calculate prices for Harry Potter books', () => {

    test('should calculate the price for two book', () => {
        const books = [1,0,0,0,0];
        expect(priceService.calculateBestPrice(books)).toBe(ONE);
    });

    test('2 books: 5% discount', () => {
        const books = [1,1,0,0,0];
        expect(priceService.calculateBestPrice(books)).toBe(TWO);
    });

    test('1 book + 2 books: 5% discount', () => {
        const books = [2,1,0,0,0];
        expect(priceService.calculateBestPrice(books)).toBe(TWO + ONE);
    });

    test('1 hog + 2 books', () => {
        const books = [2,2,1,1,1];
        expect(priceService.calculateBestPrice(books)).toBe(FIVE + TWO);
    });

    test('Multiple combinations', () => {
        const books = [2,2,2,1,1];
        expect(priceService.calculateBestPrice(books)).toBe(FIVE + THREE);
    });

    test('Best price for 2 rounds of 4', () => {
        const books = [2,2,2,1,1];
        expect(priceService.calculateBestPrice(books)).toBe(FOUR + FOUR);
    });

    test('Best price for 2 rounds of 4 in different order', () => {
        const books = [2,1,2,1,2];
        expect(priceService.calculateBestPrice(books)).toBe(FOUR + FOUR);
    });
});