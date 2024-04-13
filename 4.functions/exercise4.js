// What does the following code log to the console?

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
  scream('Yipeee');

  // Solution
  /* It doesn't log anything. 
  The return on line 3 terminates the function before 
  it can log anything. */