/*
Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations
on those two numbers: addition, subtraction, product, quotient, remainder, and power. 
Do not worry about validating the input
*/

let readlineSync = require('readline-sync');

let firstNumber = parseInt(readlineSync.question('Enter the first number: \n'))
let secondNumber = parseInt(readlineSync.question('Enter the second number: \n'))



console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);  