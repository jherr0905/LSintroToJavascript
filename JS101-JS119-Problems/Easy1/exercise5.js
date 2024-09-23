/* 
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill 
to the console. You can ignore input validation and assume that the user will enter numbers */


let readlineSync = require('readline-sync');

let billAmountinDollars = parseFloat(readlineSync.question('What is the bill?'))
let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage?')) 
let tipPercentageRounded = tipPercentage / 100; //.15s
let totalTipAmount = tipPercentageRounded * billAmountinDollars;

let totalBill = billAmountinDollars + totalTipAmount;

console.log(`The tip is ${totalTipAmount}.The total is ${totalBill}`)