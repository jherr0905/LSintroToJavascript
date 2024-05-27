/* In the following code, what are the final 
length values for array1, array2, array3, array4, and array5? */


let array1 = [1, 2, undefined, 4];
//Solution 4

let array2 = [1];
array2.length = 5;
//Solution


let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;