module.exports = function toReadable(number) {
    const numberToWords = require('number-to-words');
    return numberToWords.toWords(number).split('-').join(' ');
}

