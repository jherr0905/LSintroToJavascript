function show(foo = undefined, bar = null) {
    console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
  }
  
  show(5, 7);
  function show(foo = 5, bar = 7) {
    console.log(`foo is ${5 ?? 3}, bar is ${7 ?? 42}`);
  }// 5, 7

  show(0, 0);
  function show(foo = 0, bar = 0) {
    console.log(`foo is ${0 ?? 3}, bar is ${0 ?? 42}`);
  }// 0,0
  
  show(4);
  function show(foo = 4, bar = null) {
    console.log(`foo is ${4 ?? 3}, bar is ${null ?? 42}`);
  }// 4, 42

  show();
  function show(foo = undefined, bar = null) {
    console.log(`foo is ${undefined ?? 3}, bar is ${null ?? 42}`);
  } // 3, 42