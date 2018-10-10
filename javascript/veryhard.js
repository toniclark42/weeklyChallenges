var firstNum = prompt('Give me a number.')
var secondNum = prompt('Give me a second number.')
var symbol = prompt("Do you want to add (+), subtract (-), multiply (*), or divide(/)? Write the symbol.")

function add(firstNum, secondNum) {
    return parseInt(firstNum) + parseInt(secondNum);
}

function sub(firstNum, secondNum) {
    return parseInt(firstNum) - parseInt(secondNum);
}

function multiply(firstNum, secondNum) {
    return parseInt(firstNum) * parseInt(secondNum);
}

function divide(firstNum, secondNum) {
    return parseInt(firstNum) / parseInt(secondNum);
}

function calculator(){
    if (symbol == '+'){
        var sum = add(firstNum, secondNum)
        return sum
    } else if (symbol == '-'){
        var difference = sub(firstNum, secondNum)
        return difference
    }  else if (symbol == '*'){
        var answer = multiply(firstNum, secondNum)
        return answer
    } else if (symbol == '/'){
        var quotient = divide(firstNum, secondNum)
        return quotient
    }
}

console.log(calculator())