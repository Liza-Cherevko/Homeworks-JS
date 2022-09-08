// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор пока он введет допустимое значение
// 2) спрашиваем у пользователя операнды, он их вводит в одном промте через запятую. То что введет пользователь не должно быть пустой строкой или null.
// 3) С помощью alert или console.log выводим результат действия (+ - / *) с операндами.



let number;
let array = []
let action = getAction()

let value = getOperands()
calculate()
function getAction(){ 
    let action = prompt('Put action')
    
    while (getActionInvalid(action)) { 
        action = prompt('Put action again');
    }
    console.log(action)
    return action
}
function getActionInvalid(action) { 
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function getNumbersInvalid (operand) { 
    return operand === null || operand === '' ;
}

function getOperands(title) {
    operand = prompt('Put operands ,').split(',');
    console.log( 'operands', operand)
    array = operand.map(i=>Number(i));

         return array;
 }

 function calculate() { 
    let condition;
    switch (action) { 
        case '+':
            condition= array.map(i=>x+=i, x=0).reverse()[0]
            break;
         case '-':
            condition = array.reduce((acc, rec) => acc - rec);
            break;
            case '*':
                condition = array.reduce((acc, rec) => acc * rec);
            break;
            case '/':
                condition = array.reduce((acc, rec) => acc / rec);
               break;
    }
    console.log(condition)
   alert(condition)
   
}    
 


 // let operand;
// let action = getAction();
// getOperands();


// function getAction() { 
//     let action = prompt('Put some action: +, -, *, /')
//     console.log(action)
    
//     while (isActionInvalid(action)) { 
//         action =  prompt('Put  action again: +, -, *, /')
//     }
//     return action
// }
// function isActionInvalid(action) { 
//     return action !== '+' && action !== '-' && action !== '*' && action !== '/';
// }


// function isOperandValidation(operand){ 
//     return operand == null || operand == '';
// }

// function getOperands (){
//      operand = prompt('Put operands ,').split(',');
//      console.log('operands value', operand)
//      while (isOperandValidation(operand)) {
//         operand = prompt('Put operand again')
//     }
//     return operand
// }
 
// function operandCalculation() {
// let acc = operand

//             switch (action) {
      
//                 case '+':
//                     operand.map(i=>x+=i, x=0).reverse()[0]
//                     break;
//                 case '-':
//                     acc = acc - operand;
//                     str += `- ${operand}`;
//                     break;
//                 case '*':
//                     acc = acc * operand;
//                     str += `* ${operand}`;
//                     break;
//                 case '/':
//                     acc = acc / operand;
//                     str += `/ ${operand}`;
//                     break;
//                 default:
//                     alert('Something wrong')
//             }
        
            
// }







