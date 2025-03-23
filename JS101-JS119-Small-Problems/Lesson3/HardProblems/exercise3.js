// Given the following similar sets of code, what will each code snippet print


function messWithVars(one, two, three) {
       // messWithVars(["one"], ["two"], ["three"])
  one = two;
  // one = ["two"]
  
  two = three;
  // two = ["three"]
  
  three = one;
  //three = ["two"]
}
 let one = ["one"];
 let two = ["two"];
 let three = ["three"];

 messWithVars(one, two, three);
 messWithVars(["one"], ["two"], ["three"]);

 //console.log(`one is: ${one}`); // print ["one"]
 //console.log(`two is: ${two}`); // print ["two"]
 //console.log(`three is: ${three}`); // print ["three"]

 //Key Concepts here 
 //Concept: Pass-by-Reference vs. Reassignment
//JavaScript passes objects (like arrays) by reference, 
//but when you reassign a function parameter, it only changes inside the function—it doesn't affect the original variable outside.

//Pass-by-reference: Arrays are passed by reference, so they are shared between the function and the caller.
// Reassignment: Reassigning a variable inside the function doesn’t affect the original array outside. You need to mutate the array to affect the original.




function messWithVars(oneOne, twoTwo, threeThree) {
  oneOne = ["two"];
  twoOne = ["three"];
  threeThree = ["one"];
}

let oneOne = ["one"];
let twoTwo = ["two"];
let threeThree = ["three"];

 messWithVars(oneOne, twoTwo, threeThree); 
console.log(`one is: ${oneOne}`); // print ["one"];
console.log(`two is: ${twoTwo}`); // print ["two"]
console.log(`three is: ${threeThree}`); // print ["three"]



function messWithVars(oneAye, twoAye, threeAye) {
        //messWithVars(["one"],["two"],["three"])
  oneAye.splice(0, 1, "two");// oneAye = ["two"]
  twoAye.splice(0, 1, "three"); // twoAye = ["three"]
  threeAye.splice(0, 1, "one"); // threeAye = ["one"]
}
 let oneAye = ["one"];
 let twoAye = ["two"];
 let threeAye = ["three"];

messWithVars(oneAye, twoAye, threeAye); 
console.log(`one is: ${oneAye}`); // print ["two"]
console.log(`two is: ${twoAye}`); // print ["three"]
console.log(`three is: ${threeAye}`); //print ["one"]

//  The concept here is pass-by-reference because arrays are objects in JavaScript. 
//When you pass arrays to the messWithVars function, you're passing references to the original arrays, not copies. 
//This allows you to mutate the contents of the arrays inside the function using methods like .splice(), which directly modifies the original arrays.

//just want to make sure i have this correct