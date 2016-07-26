const Answer = require('./answer-generator');
const Compare = require('./CompareNumber');

class Guess {
    static  guess (input){
     const answer = Answer.generate();
        return new Compare(input,answer).output();
    }
}

module.exports = Guess;
