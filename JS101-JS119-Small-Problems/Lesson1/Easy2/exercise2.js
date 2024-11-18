/*
Write a program that will ask for user's name. The program will then greet the user. if the user writes "name!"
then the computer yells back to the user.

Examples:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

*/

let readlineSync = require('readline-sync');

let userInputName = readlineSync.question('What is your name? ');

let substring = "."
let substring2 = "!"

if(userInputName.includes(substring)){
    console.log(`Hello ${userInputName}.`)
}else if(userInputName.includes(substring2)){
    console.log(`HELLO ${userInputName}. WHY ARE WE SCREAMING? `)
}else {
    console.log(`Hello ${userInputName}`)
}



