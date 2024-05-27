/* What is the difference between the following two code snippets? 
Check the MDN documentation on while and do...while */

let counter = 0;

/*
while (condition)
  statement
*/

while (counter > 0) {
  console.log('Woooot1!');
  counter -= 1;
}

/* A do/while loop differs visibly from a while loop, but its behavior is 
almost identical. The crucial difference is that do/while always executes 
the code in the block at least once.*/

let counter2 = 0;

do {
  console.log('Woooot2!');
  counter2 -= 1;
} while (counter2 > 0);