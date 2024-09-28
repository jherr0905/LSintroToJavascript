/* 
Write a function that takes a string argument and 
returns a new string that contains the value of the 
original string with all consecutive duplicate characters 
collapsed into a single character

Example:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
*/
function crunch(stringArg){
let newString = ''
  for(let i = 0; i < stringArg.length; i++){

    if(stringArg[i] !== stringArg[i - 1]){
        newString = newString + stringArg[i]
    }
    console.log('newString', newString)
  
  }
  return newString
}

console.log(crunch('ddaaiillyy ddoouubbllee'))