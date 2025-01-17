// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

//Return a new string that swaps the case of all the letters:
//return output: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

//go thru string and of upperCase return lower , if lowerCase return upper.. 
//maybe we place in an array and check every char in the string... 

//console.log(munstersDescription.split(''));

let arrayOfString = munstersDescription.split(''); 
let newArray = []
for(let i = 0; i < arrayOfString.length; i++){
    let eachCharacter = arrayOfString[i];
    
    if(eachCharacter === eachCharacter.toUpperCase()){
        let newLowerCaseLetters = eachCharacter.toLowerCase();
        newArray.push(newLowerCaseLetters);
    } else if (eachCharacter === eachCharacter.toLowerCase()) {
        let newUpperCaseLetters = eachCharacter.toUpperCase();
        newArray.push(newUpperCaseLetters);
    }
  
    
}

console.log(newArray.join(''))
//return newArray