/* Write a function that accepts a single argument, a number, and 
returns the result of multiplying its argument by an exponent of 2 
(also known as squaring the number).*/

squaredNumber(3); // 9

//Solution

function squaredNumber(num){
  return Math.sqrt(num * num);

}

console.log(squaredNumber(3));