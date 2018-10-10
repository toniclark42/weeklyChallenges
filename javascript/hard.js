var firstNum = 5
var secondNum = 2

//Addition
function add(numOne, numTwo) {
  return numOne + numTwo;
}
var sum = add(firstNum, secondNum)
console.log(sum)

//Subtraction
function sub(numOne, numTwo) {
  return numOne - numTwo;
}
var difference = sub(firstNum, secondNum)
console.log(difference)

//Multiplication
function multiply(numOne, numTwo) {
  return numOne * numTwo;
}
var answer = multiply(firstNum, secondNum)
console.log(answer)


//Division

function divide(numOne, numTwo) {
  return numOne / numTwo;
}
var answer = divide(parseFloat(firstNum), parseFloat(secondNum))
console.log(answer)