/* 
The || operator returns a truthy value if either or both of it's operands are truthy,
a falsey value if either operand is falsey, This wrks great until you need only one,
but not both, of 2 conditions to be truthy: the so called 'exclusive or'

In this exercise you will write a function named xor, that takes 2 arguments, and returns
true if exactly one of its arguments is truthy, false otherwise. Note, that we are looking
for a boolean result instead of a truthy/falsy value as returned by || and &&

*/
/*
Examples
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true

*/
//input: boolean, or numbers....
//output: boolean, return true if one of arguments is truthy else false. 

// || operator returns truthy if either or both operands truthy, a falsey if both falsey
// && operator returns truthy if both operands are truthy, and falsey if EITHER is falsey
//That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, 

function xor(arg1, arg2){
  if((arg1 && !arg2) || (arg2 && !arg1)){
    return true;
  }
  return false;

}

console.log(xor(1,1))

