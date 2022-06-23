module.exports = function toReadable(number) {
    const numberToWords = require('number-to-words');
    // console.log(numberToWords.toWords(number).split('-').join(' '));
    return numberToWords.toWords(number).split('-').join(' ');
}
// module.exports(265)
