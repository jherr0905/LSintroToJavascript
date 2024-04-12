let rlSync = require('readline-sync');
let age = Number(rlSync.question("What's your age?\n"));


console.log(`You are ${age} years old.`);

age += 10;
console.log(`In 10 years, you will be ${age} years old.`);

age += 10;
console.log(`In 20 years, you will be ${age} years old.`);

age += 10;
console.log(`In 30 years, you will be ${age} years old.`);

age += 10;
console.log(`In 40 years, you will be ${age} years old.`);



