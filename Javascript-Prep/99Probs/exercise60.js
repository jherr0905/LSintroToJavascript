/* What will the following code log to the console and why? 
Don't run it until you have tried to answer.*/

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

//My solution, cannot reassign a const
// TypeError: Assignment to constant variable.