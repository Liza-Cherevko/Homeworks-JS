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

let value = getValue('Put value')

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
    let operand = prompt(title);
    while (getNumbersInvalid(operand)) { 
        operand = prompt('Put number of values again')
    }
    return +operand
}

function getNumbersInvalid (operand) { 
    return operand === null || operand.trim() === '' || isNaN(operand);
}

function showNum (){
    let num = '0'
    
    for (let i = 0; i <= numberOfvalue.length; i++) { 
        if (i === numberOfvalue.length) { 
           
        }
    }   
   
}

function getValue(title) { 
    let operand = prompt(title)
    while (getNumbersInvalid(operand)) { 
        operand = prompt('Put  values again')
    }
    return +operand
}