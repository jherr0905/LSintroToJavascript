// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam"," Pebbles"]);

//This code will create a nested array that looks like this:

// ["Fred","Wilma",["Barney", "Betty"], ["Bambam","Pebbles"]];

//Problem: Create a new array that contains all the above values, but in an un-nested format:
//our output like this: [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

//My Solution
console.log(flintstones);
console.log('flatten Array',flintstones.flat());

//Alternative solution
flintstones = [].concat(...flintstones);