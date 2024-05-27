/* Find the MDN documentation on operator precedence, and use 
it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.*/

4 * 5 + 3 ** 2 / 10


//Solution
//The MDN page on operator precedence in JavaScript includes a table that 
//tells us that the order of the arithmetic operator used in the expression 
//above is as follows:

//** > (* and /) > +

//This means that when using parentheses for grouping, the expression is equivalent to (4 * 5) + ((3 ** 2) / 10), and therefore evaluates to 20.9

// 20 + 9 / 10
//20 +.9
// 20.9