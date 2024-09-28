/* Create a new object named myObj that uses 
myProtoObj as its prototype.*/ 

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

  let myObj = Object.create(myProtoObj);
  console.log(myObj);

  for (let key in myObj) {
    console.log(key + ": " + myObj[key]);
  }