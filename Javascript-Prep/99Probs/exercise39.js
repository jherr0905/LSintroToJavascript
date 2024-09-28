/* Without running the below code, determine what will 
be logged to the console. */

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;
                    //!true ? 5.25 : 3.99
                    // false ? 5.25 : 3.99

console.log('$' + admissionPrice);

//Solution we log 3.99