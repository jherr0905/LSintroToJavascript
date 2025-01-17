//What will the following code output?


let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
arr2[0].first = 42; //[{ first: 42 }, { second: "value2" }, 3, 4, 5];
console.log(arr1); //[{ first: "value1" }, { second: "value2" }, 3, 4, 5];


// i got this one incorrect, thinking the orignal array wouldn't be changed..
//i guess im not very clear on what shallow copy which is what the slice method is doing
// vs what a deep copy is. 

//shallow copy vs deep copy..??