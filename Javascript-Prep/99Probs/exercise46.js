 /* Write a function that compares the length of two strings. 
 It should return -1 if the first string is shorter, 1 if the 
 second string is shorter, and 0 if they're of equal length, as in the following example: */


 function compareByLength(arg1,arg2){
    // console.log(arg1.length,arg2.length);
    if(arg1.length < arg2.length){
        return -1
    }else if(arg1.length > arg2.length){
        return 1
    }else{
        return 0
    }

 }


 console.log(compareByLength('patience', 'perseverance')); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0