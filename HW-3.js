"use strict"

// Спрашиваем число.
// Проверяем что введено число и оно больше 0;
// Если нажата отмена или пустая строка или значение невалидно, переспрашиваем
// Посчитать сумму все четных чисел до этого числа включительно // 2+4+6+8+10
// Посчитать сумму все нечетных чисел до этого числа включительно // 1+3+5+7+9
// Выводим результат
// Сумма четных: 30
// Сумма нечетных: 25



const value = getValue('Enter a number greater than 0 ');
const result = showSum();

function getValue(title) {
    let value = prompt(title)
    while (isValueInvalid(value)) {
        value = prompt(title);
    }
 return +value
};

function isValueInvalid(value) {
    return value === null || value.trim() === '' || isNaN(value) || value < 0;
};

 function showSum (){
    let strEven = '0',
        strOdd = '0',
        sumEven = 0,
        sumOdd = 0;
    
    for (let i = 0; i <= value; i++) {
        if (i % 2 == 0) {
            strEven = `${strEven} + ${i}`;
            sumEven += i;
        } else { 
            strOdd = `${strOdd} + ${i}`;
            sumOdd += i;
        }
    }

    alert(`Even sum: ${strEven}= ${sumEven},  Odd sum: ${strOdd}= ${sumOdd}`);
}








