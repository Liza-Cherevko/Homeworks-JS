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
let value = showNum('Put operand')
let result = calculate( action)
showResult(action, result)


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
function getOperandInvalid (operand) { 
    return operand === null || operand.trim() === '' || isNaN(operand);
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




















// function getCalculate( action){
//     switch (action){
//         case '+':
//             return  operand + operand;
//         case '-':
//             return operand - operand;
//         case '*':
//             return operand * operand;
//         case '/':
//             return operand / operand;
//          default:
//             alert('Something wrong')       
//     }
// }

// function showResult (){
//     let sum = 0,
//         sub = 0,
//         mul = 0,
//         div = 0;
    
//     for (let i = 0; i <= numberOfvalue; i++) {
//         if (action == '+') {
//             sum = `${i} + ${i}`;
           
//         } else if (action == '-') {
//             sub = `${i} - ${i}`;
//         } else if (action == '*') {
//             mul = `${i} * ${i}`;
//         } else { 
//             div = `${i} / ${i}`;
//         }
//     }

//     alert( `${i} ${action} ${i} = ${result} `);
// }