/* Add a property to the below object, jane, 
so that the code on line 16 logs 'Hey, Bobby!' to the console.*/

let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    // add code here
    //My Solution
    greet: function(name) {
        console.log(`Hey, ${name}!`);
      },
  };
  
  jane.greet('Bobby'); // Hey, Bobby!