module.exports = function toReadable (number) {

    const numObj = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        100: 'hundred',
    }

    const numTen = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    const numClass = {
        0: '',
        1: ' thousand ',
        2: ' million ',
        3: ' billion ',
        4: ' trillion ',
    }

    if (number === 0) return ('zero');

    const digit = number.toString()
    const digitRang = number.toString().length
    const digitClass = Math.ceil(number.toString().length/3)

    let result = ''
    let digitTemp

    for (let i = 0; i < digitClass; i++) {

        digitTemp = +(digit.charAt(digitRang - (3+3*i)) + digit.charAt(digitRang - (2+3*i)) + digit.charAt(digitRang - (1+3*i)))

        if (Math.floor(digitTemp%100) > 0 && Math.floor(digitTemp%100) < 20) result = numObj[Math.floor(digitTemp%100)] + numClass[i] + result;
        if (Math.floor(digitTemp%100) >= 20 && Math.floor(digitTemp%100) < 100) result = numTen[Math.floor(Math.floor(digitTemp%100)/10)] + ' ' + numObj[Math.floor(digitTemp%100)%10] + numClass[i] + result;
        if (Math.floor(digitTemp/100) !== 0) result = numObj[Math.floor(digitTemp/100)] + ' ' + numObj[100] + ' ' + result;
    }
    return result.trim()  // надо убрать лишние пробелы

    //  Разбиваю число на классы по 3 цифры в цикле по количеству классов
    //  и исходя из номера класса добавляю тысячи, миллионы и т.д.
    // 'charAt' при отсутствии индекса возвращает ''. Поэтому можно не считать кол-во цифр в наибольшем классе
    // Вместо numObj[100] можно просто написать 'hundred'

}
