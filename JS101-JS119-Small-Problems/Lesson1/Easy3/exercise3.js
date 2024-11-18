/* 
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.

*/

/*

For a do while loop, you can iterate until the desired string length is reached, 
adding '1's and '0's alternately. Think about using a counter to keep track of 
whether to append '1' or '0'.

Hint: Start by initializing an empty string and append '1' or '0' based on whether 
the counter is odd or even. Use modulo (%) to check this within your loop.
 */

function stringy(integerArg){

    let i = 0;
    let emptyString = ''
    do{
        if( i % 2 === 0){
            emptyString += '1'
        }else{
            emptyString += '0'
        }
       i++
    }while(i < integerArg )
    
    return emptyString
}

console.log(stringy(6));    // "101010")