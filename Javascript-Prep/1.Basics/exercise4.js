/* Explain why this code logs '510' instead of 15. */

// Solution
//10 gets coerced to a String and then gets concatenated to the String '5', which produces '510'

let operation = '5' + 10
console.log(typeof operation);