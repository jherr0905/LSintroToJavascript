//Alan wrote the following function, which was 
//intended to return all factors of number:

function factors(number) {
    let divisor = number;
    console.log('divisor..', divisor);
    let factors = [];

    if (number <= 0) {
      console.log('Cannot find factors for 0 or negative numbers.');
      return []; // Return an empty array gracefully.
  }
  
    while(divisor > 0){
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;

    }

    return factors;
  }

  console.log('ourFunction',factors(0))

/* 
Alyssa noticed that this code would fail when the 
input is 0 or a negative number, and asked Alan to change the loop. 
How can he make this work without using a do/while loop? 
Note that we're not looking to find the factors for 0 or negative numbers, 
but we want to handle it gracefully instead of raising an exception or going 
into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code? */