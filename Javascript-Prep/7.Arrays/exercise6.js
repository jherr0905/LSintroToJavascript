/* Use map and filter to first determine the lengths of 
all the elements in an array of string values, then discard 
the even values (keep the odd values).*/
            //1 //4     //5      //3    //2
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

/*Note that it is possible to solve this problem without using map. 
However, our intent is to show how you can combine multiple functions 
to achieve a desired result.*/

/* 
You're almost there! Remember that the map function should return 
an array of lengths, and then you should apply the filter function
 to that array to keep only the odd lengths. You may want to reconsider
  how you're nesting the map and filter functions.*/

function oddLengths(arr) {
  return arr.map(function(value){
    return value.length;
}).filter(function(length) {
   return length % 2 !== 0;
    });
    
  }

  console.log(oddLengths(arr))