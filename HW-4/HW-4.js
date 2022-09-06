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
let value = showNum()
let calculation = getActionCalculation()
let condition = getCondition()

// let result = calculate( action)
// showResult(action, result)


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


function showNum (title){
    let operand = prompt(title)
    for (let i = 0 ; i <= numberOfvalue; i++) { 
        if (operand !== numberOfvalue ) { 
            operand = prompt(title)
        }
    }
    while (getOperandInvalid(operand)) { 
        operand = prompt('Put operand again')
    }
    return +operand
}

function calculate(action){
    switch (action){
        case '+':
            return operand[i] + operand[i];
        case '-':
            return operand[i] - operand[i];
        case '*':
           return operand[i] * operand[i];
        case '/':
            return operand[i] / operand[i];
         default:
            alert('Something wrong')       
    }
}
function showResult( action, result) {
    alert(`${operand[i]}  ${action} ${operand[i]}   = ${result}`);
}