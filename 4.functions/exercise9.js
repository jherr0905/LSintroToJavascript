/* Identify all of the variables named on each line of the following code. 
You may assume that question is the name of a a built-in function in JavaScript
(it is not, so this code won't work as written).

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

  // multiply a variable
  // left right, parameter but variable
  // product a variable

  // getNumber variable
  // prompt a variable
  // question a variable, also parseFloat a variable
  // left a variable
  // right variable

  // line 18 console, left, right,multiply.
  // for console.log, console is name of a variable for built in Console object
  // log is a property name not a variable. 
