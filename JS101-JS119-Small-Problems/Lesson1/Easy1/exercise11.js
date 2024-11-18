/* Write a function that determines and returns the UTF-16 
string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values of 
every character in the string. (You may use String.prototype.charCodeAt()
 to determine the UTF-16 value of a character.)*/


function utf16Value(stringArgument){
   
    let arrayString = stringArgument.split('')
   
    let counter = 0;
    for(let i= 0; i < arrayString.length; i++){
        let ourLetters = arrayString[i];    
        let charCode = ourLetters.charCodeAt(0);
        counter += charCode;
    }
    return counter

}

console.log(utf16Value('Four score'));