/* Convert the person object into a nested array nestedPerson, 
containing the same key-value pairs. */

let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

  //My Solution
  // object.entries  returns an array of nested arrays..
  let ourNestedArray = Object.entries(person);

  console.log(ourNestedArray);

  //Alternate solution
  let nestedPerson = [];

  for (let property in person) {
    nestedPerson.push([property, person[property]]); 
  }