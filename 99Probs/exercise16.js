/* The MDN page for Date lists two methods to get the year of a date. */
/* What is the difference between the two methods and which one should you use? */

let today = new Date();

//Solution

//Deprecated: 
// The getYear() method of Date instances returns the year for this date according to local time
// Because getYear() does not return full years ("year 2000 problem"), it is deprecated and has been 
//replaced by the getFullYear() method.
today.getYear();

// The getFullYear() method of Date instances returns the year for this date according to local time.
today.getFullYear();