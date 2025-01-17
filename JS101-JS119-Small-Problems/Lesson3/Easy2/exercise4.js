// starting with the string:
let famousWords = "seven years ago...";

//show 2 different ways to put the expected "Four score and " in front of it. 

//My Solution
let beginning = 'Four score and'
console.log(`${beginning} ${famousWords}`);
console.log(beginning.concat(' ', famousWords));