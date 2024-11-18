/* Write a function that computes the sum of all numbers 
between 1 and some other number, inclusive, that are multiples 
of 3 or 5.
 For instance, if the supplied number is 20, the 
 result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an 
integer greater than 1. */
//or a hint, you could use a loop that goes from 1 to the given number, 
//and inside the loop, check if the current number is divisible by either 3 or 5. 
//If it is, add it to a running total.

function sumOfAllNumbers(number){
    let runningTotal = 0;
    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 || i % 5 === 0)
        runningTotal = runningTotal + i;
    }
    return runningTotal
}

console.log(sumOfAllNumbers(20));