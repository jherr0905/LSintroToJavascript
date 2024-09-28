/* 
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"

*/

function century(year) {
 
  const cent = Math.floor((year + 99) / 100);
 
  let suffix = 'th'; 
  
  if (cent % 100 >= 11 && cent % 100 <= 13) {
      suffix = 'th';
  } else {
  
      const lastDigit = cent % 10;
      if (lastDigit === 1) {
          suffix = 'st';
      } else if (lastDigit === 2) {
          suffix = 'nd';
      } else if (lastDigit === 3) {
          suffix = 'rd';
      }
  }
  
 
  return cent + suffix;
}


console.log(century(2000));  // "20th"
console.log(century(2001));  // "21st"
console.log(century(1965));  // "20th"
console.log(century(256));   // "3rd"
console.log(century(5));     // "1st"
console.log(century(10103)); // "102nd"
