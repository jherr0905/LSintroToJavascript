/* 
Write a function that takes a non-empty string argument and 
returns the middle character(s) of the string. If the string has an odd length, 
you should return exactly one character. If the string has an even length, 
you should return exactly two characters.

Examples:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

*/

function centerOf(argument){
    let stringArray = argument.split('');
    let length = stringArray.length;

    if(length % 2 !== 0){
        let charReturn = Math.floor(length / 2) - 1;
        return stringArray[charReturn];
    }else{
        let charReturn = Math.round(length / 2)
        let otherChar = charReturn - 1
        let chars = stringArray[otherChar] + stringArray[charReturn]
         return chars    
    }

}

console.log(centerOf('Launchschool'))

