/**
 * Back in the stone age (before CSS), we used spaces to align things on the screen.
 * If we have a 40-character wide table of Flintstone family members, how can we center 
 * the following title above the table with spaces?
 * 
 */

let title = "Flintstone Family Members";

//My Solution
let spaces = Math.floor((40 - title.length)/2);
console.log('spaces', spaces);
console.log(title.padStart(40, ' '));