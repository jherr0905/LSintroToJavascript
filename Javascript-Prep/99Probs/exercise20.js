let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

//You'll see that it raises an error:
// TypeError: tweet.length is not a function
// Check the documentation of both TypeError and length, in order to find out what causes the error.

//The length data property of a String value contains the length of the string in UTF-16 code units.
//The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
//The syntax section of the MDN page on length demonstrates that length is called without parentheses. This is because it is a string property, not a string method.