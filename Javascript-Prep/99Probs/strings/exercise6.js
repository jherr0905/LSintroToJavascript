/* Write code that checks whether the string 
byteSequence contains the character x */

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

//My Solution
console.log(byteSequence.match(/x/));

//ALTERNATE 
byteSequence.includes('x'); // true