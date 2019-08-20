function getNumberOfBooksInCurrentRound(books, maxPerRound) {
    let numberOfBooksInCurrentRound = 0;
    for (let i = 0; i , i < books.length; i++) {
        if ( books[i] >= 1) {
            numberOfBooksInCurrentRound ++;
            books[i] --;
        }
        if (numberOfBooksInCurrentRound === maxPerRound) {
            break;
        }
    }
    return numberOfBooksInCurrentRound;
}

module.exports = {getNumberOfBooksInCurrentRound};