/* 
Write a function that will take a short line of text, 
and write it to the console log within a box.
*/

//Here's a hint: Focus on building the top and bottom borders based on the length of the string. 
//The middle part will consist of an empty line followed by the string itself, enclosed by vertical borders. 
//Use string repetition to help create the structure efficiently.

function logInBox(stringArgument){
    let length = stringArgument.length;
    console.log('length', length);
    let topBorder = '+' + '-'.repeat(length +2 )  + '+';
    let emptyLine = '|' + ' '.repeat(length + 2) + '|'
  
    console.log(topBorder);
    console.log(emptyLine);
    console.log(`| ${stringArgument} |`);
    console.log(emptyLine);
    console.log(topBorder);
    

}

logInBox('To boldly go where no one has gone before.');