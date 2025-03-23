// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) {// boo and scare variables
     let myBoo = scare.toUpperCase() + "!!!"; // myBoo variable,!!! primitive values
     console.log(myBoo);
    }

const halloweenCollection = { //halloweenCollection is a variable, also object
    greet: "Happy Halloween", // Happy Halloween primitive
    scare: "Boo",             // Book primitive
    wish: "May all your pumpkins be glowing", // May all your pumpkins be glowing - primitive
         
};

let myBoo = boo(halloweenCollection["greet"]); // myBoo variable, greet is primitive