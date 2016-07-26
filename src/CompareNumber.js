class CompareNumber {
    constructor(input, answer) {
        this.input = input;
        this.answer = answer;
    }

    output() {

        const inputArray = this.input.split('');
        const answerArray = this.answer.split('');
        const sameArray = inputArray.filter(input => answerArray.some(answer => answer === input));

        const array = sameArray.map(arr => {

            if (answerArray.indexOf(arr) === inputArray.indexOf(arr)) {
                return 'A';
            } else {
                return 'B';
            }
        });

        const Acount = array.filter(count => count === 'A').length;
        const Bcount = array.length - Acount;
        return `${Acount}A${Bcount}B`;
    }
}

module.exports = CompareNumber;