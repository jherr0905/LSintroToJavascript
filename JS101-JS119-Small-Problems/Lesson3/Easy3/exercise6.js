let arr = [1, 2, 3]; //primitive values 1 2 3
let newArr = arr;

const num = arr[0]; //1 , 0 - primitive values , count = 5
let newNum = num; // primitve value count = 6

function double(num) { // num is passed by value, primitives, num rcvs copy 1, count = 8 
  return num * 2;// primtive value count = 7
}

double(newNum); // returns product here, count  = 9



// let arr = [1, 2, 3]; // 1)arr is a variable, [] object, 1 2 3 are primitive values, count = 3
// let newArr = arr; // 2) newArr is a variable, arr is an object

// const num = arr[0]; // 3) num variable, 4 is a primitive value, count = 4
// let newNum = num; // 4) newNum variable, 5 num is a primitive value, count = 5

// function double(num) { // 6)double is a variable, 5 )num is a variable, function is an object, 
//   return num * 2; // 6 -primitve value, 7 primitve value 2 , count = 7
// }

// double(newNum); // 8 primitive value

//There are 6 variables, 9 primitive values, and 2 objects.