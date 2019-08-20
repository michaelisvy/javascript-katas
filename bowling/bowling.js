const FULL_SCORE = 10;
class BowlingGame {
    constructor() {
        this.score = [];
        this.bonus = [];
    }
    roll(numOfPins) {
        this.score.push(numOfPins);
    }
    calculateScore(){
        let totalScore = 0
        this.score.forEach(score => {
            if(this.isPreviousTwoRollSpare()){
                totalScore += score *2;
                console.log("true", totalScore);
            } else {
                totalScore += score;
                console.log("false", totalScore);
            }
        });
        return totalScore;
    }
    resetScore() {
        this.score = [];
    }
    isPreviousTwoRollSpare() {
        const lastTwoRolls = this.score.slice(-3, -1);
        if(lastTwoRolls.length < 2) return false;
        return lastTwoRolls.reduce((totalScore, currentScore) => totalScore + currentScore, 0) === FULL_SCORE;
    }
}

module.exports = BowlingGame;