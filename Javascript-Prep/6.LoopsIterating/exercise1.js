/* Modify the age.js program you wrote in 
the exercises for the Input/Output chapter. 
The updated code should use a for loop to display 
the future ages */

let rlSync = require('readline-sync');
let age = Number(rlSync.question("What's your age?\n"));


console.log(`You are ${age} years old.`);

// for (initialization; condition; increment) {
//     // loop body
//   }
  for (let years= 10; years <= 100; years += 10) {
  
    let counter = age + years
    console.log(`In  ${years} years, you will be ${counter} years old.`);
  }

// age += 10;
// console.log(`In 10 years, you will be ${age} years old.`);

// age += 10;
// console.log(`In 20 years, you will be ${age} years old.`);

// age += 10;
// console.log(`In 30 years, you will be ${age} years old.`);

// age += 10;
// console.log(`In 40 years, you will be ${age} years old.`);