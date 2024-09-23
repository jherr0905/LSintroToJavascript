/* Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the if p - product, multiply numbers btwn 1 - entered integer, inclusive. */


let readlineSync = require('readline-sync');

let userInputInteger = parseFloat
(readlineSync.question('Please enter an integer greater than 0: '))


let userInputLetter = readlineSync.question
('Enter "s" to compute the sum, or "p" to compute the product: ');


if(userInputLetter === 's' || userInputLetter === 'S'){
    let addition = userInputInteger + 1
    let multiplication = (userInputInteger * addition) / 2
    console.log(`The sum of the integers betwen 1 and ${userInputInteger} is ${multiplication}`)

}else if (userInputLetter ===  'p' || userInputLetter === 'P' )

{
    let product = 1;
    for(let i = 1; i <= userInputInteger; i++){
        product = product * i
    }
    console.log(`The product betwen 1 and ${userInputInteger} is ${product}`)
} else {
    console.log('Invalid input.')
}

