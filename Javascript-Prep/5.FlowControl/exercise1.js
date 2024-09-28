/* What values do the following expressions evaluate to? */

false || (true && false); // false || false 

// solution - false
// The or || operator returns true when either operand 
//is true and false when both operands are false

//The && and operator returns true when both operands 
//are true and false when either operand is false.

true || (1 + 2);
// true || (3).. 
//solution - true

(1 + 2) || true;
// (3) || true
//solution true