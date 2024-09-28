/* Using the code from Exercise 9, classify each variable name as either global or local. 
For our purposes here, you may assume that the code from Exercise 9 is the entire program

*/

function multiply(left, right) {
    let product = left * right;
    return product;
  }
  
  function getNumber(prompt) {
    return parseFloat(question(prompt));
  }
  
  let left = getNumber('Enter the first number: ');
  let right = getNumber('Enter the second number: ');
  console.log(`${left} * ${right} = ${multiply(left, right)}`);

//Solution
// Global variables: multiply, getNumber, left, right, console, parseFloat, question
// Local variables: left, right, product, prompt

// Function names are global variables unless those functions are defined as an object property or 
// nested inside another function. 
//function parameters and variables declared inside a function are always local variables..like left right product prompt
