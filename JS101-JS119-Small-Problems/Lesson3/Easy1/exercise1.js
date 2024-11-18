//Will the code below raise an error?

let numbers = [1,2,3];
numbers[6] = 5;

//My thoughts..
//No, it will not raise an error
//Index:  0 1 2 3 4 5 6
//       [1,2,3,empty,empty,empty,5]

//bonus
/* let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ] */