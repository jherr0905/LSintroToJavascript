// Write a one-line expression to count the 
//number of lower-case t characters in each of the following strings:

const { stat } = require("fs");

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// let counting = statement1.split('');


// let counter = 0;
//  for(let i = 0; i < counting.length; i++){
   
//     if(counting[i] === 't'){
   
//       counter++
     
//     }
 
//  }
//  console.log(counter); // This will print the number of 't' characters
 //A good approach would involve using split(), filter(), and length in combination.
const countLowerCaseTs = statement1.split("").filter((letter) => letter === 't').length;
console.log(countLowerCaseTs);