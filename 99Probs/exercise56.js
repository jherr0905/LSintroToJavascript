/* What will the following code log to the console and why? 
Don't run it until you have tried to answer.*/

function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
      let a = 2;
      console.log(a);
    }
  }
  
  myFunction();

  //My Solution
  //ReferenceError: Cannot access 'a' before initialization
  // . The reason that doesn't happen is that variables declared by 
  // let aren't available until the code runs. Therefore, the let statement 
  // on line 5 creates a new variable a that isn't available on line 8