/* Add a qux property with value 3 to the myObj object we 
created in the previous exercise. Now, examine the following 
code snippets:*/

/* Create a new object named myObj that uses 
myProtoObj as its prototype.*/ 

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

  let myObj = Object.create(myProtoObj);
  myObj.qux= 3;
  // console.log(myObj.qux);


  let objKeys = Object.keys(myObj);//['foo','bar','qux']
  console.log('objKeys',objKeys)
objKeys.forEach(function(key) {
  console.log('key',key); // foo, bar, qux
});