/* What will the following code log to the console and why? Don't run it until you have tried to answer.*/

console.log(greeting);

let greeting = 'Hello world!';

//Solution
// ReferenceError: Cannot access 'greeting' before initialization
// var , let temporal dead zone until initilaized to a value, 
// javascript hoists the variable declartion not initialization..
