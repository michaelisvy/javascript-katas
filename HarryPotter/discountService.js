const PRICE_ONE_BOOK = 8;
const DISCOUNT_RATES = {
    1: 0,
    2: 0.05,
    3: 0.10,
    4: 0.20,
    5: 0.25
}

function calculateDiscountedPrice(numberOfBooks) {
    if (numberOfBooks === 0 ) {
        return 0;
    } else { 
        let priceAfterDiscount = PRICE_ONE_BOOK * (1 - DISCOUNT_RATES[numberOfBooks]);
        return numberOfBooks * priceAfterDiscount;
    }
}

module.exports = {calculateDiscountedPrice};