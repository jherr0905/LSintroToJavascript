/* What happens when you run the following program? 
Why do we get that result? */

{
  let foo = 'bar';
}

console.log(foo);


// Solution 
// our output is 

/* console.log(foo);
            ^

ReferenceError: foo is not defined */

/* The program outputs an error since foo is out of scope: the let statement creates variables with block scope */