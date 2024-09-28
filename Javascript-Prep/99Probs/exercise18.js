/* Find out how we can join two or more strings together.*/

//Solution
//The concat() method of String values concatenates the string arguments to this string and returns a new string.

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

//A second way to concatenate strings is to use the + operator. For example:
let firstName = 'Ada';
let lastName = 'Lovelace';

firstName + ' ' + lastName;
// 'Ada Lovelace'