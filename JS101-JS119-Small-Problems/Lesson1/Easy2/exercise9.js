/*
Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).

Example:
Teddy is 69 years old!
*/

function getTeddysAge(min, max){
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
let randomAge = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

  console.log(`Teddy is ${randomAge} years old! `);
  return randomAge
}

console.log(getTeddysAge(20,120));