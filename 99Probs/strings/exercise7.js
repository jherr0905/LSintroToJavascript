/* Write a function that checks whether 
a string is empty or not. For example:*/


//My Solution
function isBlank(string) {
    return string.length === 0;
  }

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true