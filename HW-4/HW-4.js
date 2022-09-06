"use strict"

// Спрашиваем мат. операцию + - * / // -
// Валидируем
// Спрашиваем сколько чисел нужно считать // 3 >=2
// Валидируем
// Спрашиваем число 1 // 2
// Валидируем
// Спрашиваем число 2 // 3
// Валидируем
// ....
// Спрашиваем число N // 5
// Валидируем
//Выводим результат
// 2 - 3 -5 = -6


let action = getAction()
let numberOfvalue = getNumbers('Put numbers of value')
let value = showNum('Put operand ')





function getAction(){ 
    let action = prompt('Put action')
    
    while (getActionInvalid(action)) { 
        action = prompt('Put action again');
    }
    return action
}
 
function getActionInvalid(action) { 
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function getNumbers(title) { 
    let number = prompt(title);  
    while (getNumbersInvalid(number)) { 
        number = prompt('Put number of values again')
    }
    return +number
}

function getNumbersInvalid (number) { 
    return number === null || number.trim() === '' || isNaN(number);
}



function showNum(title) {
    let acc;
    let str = '0'
    let operand = prompt(title)
    for (let i = 0; i < numberOfvalue; i++) {
        if (i === 0) {
            acc = operand;
        }
        else {
            switch (action) {
                case '+':
                    str = `${acc} + ${operand} `
                    acc += operand
                    break;
                case '-':
                    str = `${acc} - ${operand} `
                    acc += operand
                    break;
                case '*':
                    str = `${acc} * ${operand} `
                    acc += operand
                    break;
                case '/':
                    str = `${acc} / ${operand} `
                    acc += operand
                    break;
                default:
                    alert('Something wrong')
            }
        }
    }
    while (getOperandInvalid(operand)) {
        operand = prompt('Put operand again')
    }
   alert(` ${str} = ${acc}`);
}
  
// function getOperandAsk(operand) { 
//      if (operand !== numberOfvalue) {
//         operand = prompt(title)
//     }
//     return operand = prompt(title)
// }


function getOperandInvalid (operand) { 
    return operand === null || operand.trim() === '' || isNaN(operand) || operand <=0;
}

