//What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];


numArray.push(2);

console.log(numArray); // 2
console.log(object) // { first: [ 1, 2 ] }

//my output includes the 2 because of references