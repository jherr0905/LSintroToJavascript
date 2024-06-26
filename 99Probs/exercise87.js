/* Create a function removeLastChar that takes a 
string as an argument, and returns the string without 
the last character.*/

//My Solution

function removeLastChar(string){
   let split = string.split('');
   let lastElem = split.pop();
   return split.join('')

}

//Alternate Solution
function removeLastChar(string) {
    return string.substring(0, string.length - 1);
  }

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'