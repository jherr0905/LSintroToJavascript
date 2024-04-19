/* Without running the following code, what do you think it will output? */

function foo(bar, qux) {
    console.log(bar);
    console.log(qux);
  }
  
  foo(42, 3.1415, 2.718);

  // Solution
  // I think it will output 42,3.1415 but will igore 2.718 because there
  // is not a 3rd parameter. 