/* What will the following code log to the console and why? 
Don't run it until you have tried to answer.*/

const a = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  function myFunction() {
    a.firstName = 'Jane';
  }
  
  myFunction();
  
  console.log(a);

  // My Solution, will log Joane Doe in object form
  // { firstName: 'Jane', lastName: 'Doe' }
  // objects that are assigned to const variables can be mutated.