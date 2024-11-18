/* 
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

let readlineSync = require('readline-sync');

let age = parseInt(readlineSync.question('What is your age? \n'));
let retirement = parseInt(readlineSync.question('At what age would you like to retire? \n'))

let yearsLeft = retirement - age

let today = new Date();
let currentYear = today.getFullYear();

let yearOfRetirement = currentYear + yearsLeft

console.log(`It's 2024. You will retire in ${yearOfRetirement}. You only have ${yearsLeft} of work to go! `)