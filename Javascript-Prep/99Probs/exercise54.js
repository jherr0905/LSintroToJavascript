/* What will the following code log to the console and why? Don't run it until you have tried to answer.*/

if (true) {
    let myValue = 20;
  }
  
  console.log(myValue);

  // ReferenceError: Cannot access 'greeting' before initialization

  /* Variables declared with let are block scoped. This means that 
  when we declare the variable myValue within a block on line 2, that
  variable is not accessible outside of the block on line 5, and a ReferenceError is raised. */