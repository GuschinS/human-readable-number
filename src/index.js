module.exports = function toReadable(number) {
    let oneToNineteen = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '
    ];
    let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num = ('000' + number).slice(-3).match(/^(\d{1})(\d{2})$/);
    if (number === 0) return 'zero'

    let numberText = num[1] != 0 ? (oneToNineteen[Number(num[1])] || `${twentyToNinety[num[1][0]]} ${oneToNineteen[num[1][1]]}`) + 'hundred ' : '';

    numberText += num[2] != 0 ? (oneToNineteen[Number(num[2])] || `${twentyToNinety[num[2][0]]} ${oneToNineteen[num[2][1]]}`)  : '';

    return numberText.trim();
}
