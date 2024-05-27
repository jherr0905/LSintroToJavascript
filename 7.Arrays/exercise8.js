/* Write a function similar to the oddLengths function 
from Exercise 6, but don't use map or filter. 
Instead, try to use the reduce method.*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr.reduce(function(resultArray,currentValue){
    if(currentValue.length % 2 !== 0){
        resultArray.push(currentValue.length)
    }
    return resultArray
},[])
console.log('oddLenghts',oddLengths);