// Consider these two simple functions:
function foo(param = "no") {
    return "yes";
  }
  
  function bar(param = "no") {
    return param === "no" ? "yes" : "no";
  }

  // What will the following function invocation return?

  bar(foo());

  //bar calls foo, and foo returns 'yes'
  //bar('yes'), no
  console.log(bar(foo())) // i think this outputs no