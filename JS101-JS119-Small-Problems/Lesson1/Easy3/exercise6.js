/* 
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument 
is a double number; otherwise, return the double number as-is.

*/

function twice(number) {
    let length = number.toString().length;


    if (length % 2 !== 0) {
        return number * 2;  
    } else {
        let str = number.toString();
        let firstHalf = str.slice(0, length / 2); 
        let secondHalf = str.slice(length / 2);
        

        if (firstHalf === secondHalf) {
            return number; 
        } else {
            return number * 2;
        }
    }
}


console.log(twice(37));           
console.log(twice(44));           
console.log(twice(334433));       
console.log(twice(444));         
console.log(twice(107));         
console.log(twice(103103));       
console.log(twice(3333));         
console.log(twice(7676));  