// Will the following functions return the same results?
//Try to answer withouth running the code or looking at the solution

function first() {
    return {
        prop1: "hi there",
    
    }
}

/*function second() {
    return 
    {
        prop1: "hi there",
    }
}*/

console.log(first());
console.log(second());

//Solution, no they will not return the same results
// Why, in the first function the return statment is immediately followed by an opening curly brace {}
// which is correctly interpreted as returning an object. 

//second() function there is a line break between the return statement and opening curly brace, in javascript
// automatic semicolon insertion ASO, causes the interpret to insert a semicolon after return making it like
// this return;, and this function returns undefined, and the object { prop1: "hi there"} is just a standalone
//block of code that does nothing.