const ROMAN_NUMBERS_MAP = {
    'L': 50,
    'IL': 49,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}


class RomanParser {
    parseRomanNumber(romanNumberExpression) {
        for (var roman in ROMAN_NUMBERS_MAP) {
            if (romanNumberExpression .startsWith(roman)) 
                return ROMAN_NUMBERS_MAP[roman] + this.parseRomanNumber(romanNumberExpression.substring(roman.length));
        }
        return 0;
        /*if (romanNumberExpression .startsWith('I')) 
            return 1 + this.parseRomanNumber(romanNumberExpression.substring(1));

        if (romanNumberExpression .startsWith('V')) 
            return 5 + this.parseRomanNumber(romanNumberExpression.substring(1));
        
        if (romanNumberExpression .startsWith('X')) 
            return 10 + this.parseRomanNumber(romanNumberExpression.substring(1));

        else return 0;*/
        
    }

    
}

module.exports = new RomanParser();

