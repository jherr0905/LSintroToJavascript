/* 
Using the following string, create a new string that contains all lowercase letters 
except for the first character, which should be capitalized. (See the example output.)

*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

//My solution
// let allLowerCase = munstersDescription.toLowerCase()

// let firstCapLetter = allLowerCase[0].toUpperCase() + allLowerCase.slice(1)

// console.log(firstCapLetter);

//alternative solution

console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLocaleLowerCase());