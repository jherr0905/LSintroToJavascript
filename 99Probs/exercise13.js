/* Using the documentation, determine how we can find the largest numeric value that 
can be represented in JavaScript. Write a line of code that returns this value.*/

//Solution
//According to the MDN documentation, the Number.MAX_VALUE static data property represents
// the maximum numeric value representable in JS. 

//Example

function multiply(x, y) {
    if (x * y > Number.MAX_VALUE) {
      return 'Process as Infinity';
    }
    return x * y;
  }
  
  console.log(multiply(1.7976931348623157e308, 1));
  // Expected output: 1.7976931348623157e+308

  //A Simple example

  console.log(Number.MAX_VALUE);