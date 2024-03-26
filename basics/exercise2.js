/* Using arithmetic operators, get the individual digits of a 4-digit number like 4936: */

//solution

let our4digitnumber = 4936;
let firstdigit = our4digitnumber % 10; // 6    
let seconddigit = (our4digitnumber - firstdigit) / 10 % 10; //3



console.log(seconddigit);