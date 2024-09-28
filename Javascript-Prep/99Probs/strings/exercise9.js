/* Write code that capitalizes the words in the 
string 'launch school tech & talk', so that you get the 
string 'Launch School Tech & Talk'*/

// let string = 'launch school tech & talk';


//Solution 

let string = 'launch school tech & talk';
let words = string.split(' ');
console.log(words)
let capitalizedWords = [];

function titleCase(string){
    for(let i = 0; i < string.length; i++){
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
        console.log(capitalizedWords);
    }
  }

  capitalizedWords.join(' ');
  // console.log(titleCase('launch school tech & talk'))