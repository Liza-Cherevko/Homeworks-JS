
// 1. Спрашиваем первый операнд 
// 1.1 Спрашиваем пока он не введет число

// 2. Спрашиваем второй операнд 
// 2.1 Спрашиваем пока он не введет число

// 3 Спрашиваем действие +, -, /, *
// 3.1 спрашиваем пока не введет правильно

// 4 Считаем результат

// 5. Вывести результат 

let num1 = prompt('Введите первое число');

while  (num1 === null || num1 === '' || isNaN(num1) ){
    num1 = prompt('Введите первое число еще раз');  
}
// if (isNaN(num1)) {
//     num1 = prompt('Введите первое число еще раз'); 
//   }



let action = prompt('Введите действие которое вы хотели бы совершить: +, -, *, /,')
while(  action === null || action === ''){
    action = prompt('Введите действие');
};
let num2 = prompt('Введите второе число');
while(num2 === null || num2 === '' || isNaN(num2)){
    num2 = prompt('Введите второе число еще раз');
};
// if (isNaN(num2)) {
//     num2 = prompt('Введите второе число еще раз'); 
//   }
let result;




 





function sum (num1, num2){
    result = +num1  + +num2
    alert(` ${num1 } + ${num2} = ${result} `)
}
function sub (num1, num2){
    result = +num1  - +num2
    alert(` ${num1 } - ${num2} = ${result} `)
}
function mul (num1, num2){
    result = +num1  * +num2
    alert(` ${num1 } * ${num2} = ${result} `)
}
function div (num1, num2){
    result = +num1  / +num2
    alert(` ${num1 } / ${num2} = ${result} `)
}

switch (action) {
    case "+":
                {
                    sum (num1, num2);
                }
    break; 
    case "-":
        {
            sub (num1, num2);
        }
break; 
case "*":
    {
        mul (num1, num2);
    }
break; 
case "/":
    {
        div (num1, num2);
    }
break; 
default:
    alert( "Нет таких значений" );           
}
