
let operand;
let action = getAction();
let num = getNumValue();
let result = operandCalculation();


function getAction() { 
    let action = prompt('Put some action: +, -, *, /')
    console.log(action)
    
    while (isActionInvalid(action)) { 
        action =  prompt('Put  action again: +, -, *, /')
    }
    return action
}
function isActionInvalid(action) { 
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}


function getNumValue() { 
    let number = prompt('Put some numbers of value')
    while (isNumberValidation(number)) { 
        number = prompt('Put numbers of value again')
    }
    console.log(number)
    return +number
    
}
 
function isNumberValidation(number){ 
    return number == null || number.trim() == '' || isNaN(number)
}


function showOperand (){ 
    operand = prompt('Put some operand')

    while (isOperandInvalid(operand)) { 
        operand = prompt('Put some operand again')
    }
    return +operand;
}
function isOperandInvalid(operand) { 
    return operand == null || operand.trim() == '' || isNaN(operand) || operand < 0;
}
function operandCalculation() {
    console.log('numberOfvalue:', num)
    let acc;
    let str =''
    for (let i = 0; i < num; i++) {
        
        let operand = showOperand('Put operand ');

        console.log('current operand:', operand)
        if (i === 0) {
            acc = operand
            str += `${operand} `  
        }
        else {
            switch (action) {
      
                case '+':
                    acc = acc + operand;
                    str += `+ ${operand}`;
                    break;
                case '-':
                    acc = acc - operand;
                    str += `- ${operand}`;
                    break;
                case '*':
                    acc = acc * operand;
                    str += `* ${operand}`;
                    break;
                case '/':
                    acc = acc / operand;
                    str += `/ ${operand}`;
                    break;
                default:
                    alert('Something wrong')
            }
        
            
        }
    }

    let result = ` ${str} = ${acc}`;
    alert(result)
}


