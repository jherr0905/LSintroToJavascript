/* Determine what the following code snippet logs. 
First solve it in your head or on paper, and only 
then run it in your JavaScript console to check the result.*/

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

              // 19        < 24 && (0 > 0 || 24 > 0);
              //                   (0 > 0 || true);
              // 19 < 24 && (true)
              // true && (true)  
let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

// ||
/* The or operator returns true when either operand is 
true and false when both operands are false*/


//Solution 
//before running code, i predict log will be True
console.log(isMoving);

/*  Bonus question: Do we need the parentheses in the boolean 
expression 
or could we also have written the following?*/

// Solution
//  Yes, we do need the parentheses, because && has a higher operator precedence than ||, so:

let isMoving2 = brakingForce < acceleration && speed > 0 || acceleration > 0;