const BowlingGame = require('./bowling');

describe('Bowling Game', () => {
    const myBowlingGame = new BowlingGame();
    beforeEach(() => {
        myBowlingGame.resetScore();
    })
    test('should return the correct total score after a single roll', () => {
        myBowlingGame.roll(6);
        expect(myBowlingGame.calculateScore()).toBe(6);
    });
    test('should return the correct score after two rolls', () => {
        myBowlingGame.roll(4);
        myBowlingGame.roll(3);
        expect(myBowlingGame.calculateScore()).toBe(7);
    });
    test.only('should return the correct score after a spare and a roll', () => {
        myBowlingGame.roll(4);
        myBowlingGame.roll(6);
        myBowlingGame.roll(2);
        expect(myBowlingGame.calculateScore()).toBe(14);
    });
    test('should check if the previous two rolls are a spare', () => {
        myBowlingGame.roll(4);
        myBowlingGame.roll(6);
        myBowlingGame.roll(2);
        expect(myBowlingGame.isPreviousTwoRollSpare()).toBe(true);
    });
    test('should return false if there are no two rolls prior', () => {
        myBowlingGame.roll(3);
        expect(myBowlingGame.isPreviousTwoRollSpare()).toBe(false);
        myBowlingGame.roll(7);
        expect(myBowlingGame.isPreviousTwoRollSpare()).toBe(false);
        myBowlingGame.roll(2);
        expect(myBowlingGame.isPreviousTwoRollSpare()).toBe(true);
    });
});