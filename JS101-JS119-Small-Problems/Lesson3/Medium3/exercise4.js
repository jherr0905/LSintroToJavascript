/* alyssa was asked to write an implementaiton of a rolling buffer, 
you can add adn remove elements from from a rolling buffer. However, once 
the buffer becomes full, any new elements will displace the oldest elements in the buffer.
She wrote two implementations of the code for adding elements to the buffer.
In presenting the code to her team leader, 
she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to 
add an element to the buffer? You may assume that newElement will always be a primitive value.*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
    buffer.push(newElement);
    if (buffer.length > maxBufferSize) {
      buffer.shift();
    }
    return buffer;
  }
  

let originalBuffer1 = [1, 2, 3];
let maxSize = 3;
let newElement = 4;

console.log("Before (buffer1):", originalBuffer1);
addToRollingBuffer1(originalBuffer1, maxSize, newElement);
console.log("After (buffer1):", originalBuffer1); // Mutated!

//let originalBuffer2 = [1, 2, 3];


// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//     buffer = buffer.concat(newElement);
//     if (buffer.length > maxBufferSize) {
//       buffer.shift();
//     }
//     return buffer;
//   }

// console.log("Before (buffer2):", originalBuffer2);
// let resultBuffer2 = addToRollingBuffer2(originalBuffer2, maxSize, newElement);
// console.log("After (buffer2):", originalBuffer2); // Not mutated!
// console.log("Result of function:", resultBuffer2); // New array returned
