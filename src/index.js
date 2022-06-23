module.exports = function toReadable(number) {
    const numWords = require('num-words');
    return numWords(number).split(' and ').join(' ');
}








    // const numberToWords = require('number-to-words');
    // console.log(numberToWords.toWords(number).split('-').join(' '));
    // return numberToWords.toWords(number).split('-').join(' ');

    // module.exports(265)


    // const { ToWords } = require('to-words');
    // const toWords = new ToWords();
    // return toWords.convert(number).toLowerCase();