const discountService = require("./discountService");
const bookService = require("./bookService");

const MAX_4_BOOKS_PER_ROUND = 4;
const MAX_5_BOOKS_PER_ROUND = 5;

function calculateBestPrice(books) {
    let priceList = [];
    priceList.push(calculatePrice(books, MAX_4_BOOKS_PER_ROUND));
    priceList.push(calculatePrice(books, MAX_5_BOOKS_PER_ROUND));
    return findLowestPrice(priceList);
}

function calculatePrice(books, maxPerRound = MAX_5_BOOKS_PER_ROUND) {
    let tempBooks = prepareBooksList(books);
    let numberOfBooksInCurrentRound = 0;
    let totalPrice = 0;
    do {
        numberOfBooksInCurrentRound = bookService.getNumberOfBooksInCurrentRound(tempBooks, maxPerRound);
        totalPrice +=  discountService.calculateDiscountedPrice(numberOfBooksInCurrentRound);
    } while( numberOfBooksInCurrentRound !== 0);

    return totalPrice;
}

module.exports = {calculatePrice, calculateBestPrice};


function findLowestPrice(priceList) {
    return Math.min(...priceList);
}

/**
 * Function that does 2 things:
 * creating a copy of the book object so the original one is not altered
 * sorts elements from top to bottom so the order of elements does not alter the price
 * For instance: [2,1,2,1,2] => [2,2,2,1,1]
 */
function prepareBooksList(books) {
    let tempBooks = books.slice(); 
    tempBooks.sort(); 
    tempBooks.reverse();
    return tempBooks;
}

