/* Write code that stores all of the vehicle property names 
in an array called keys. */

let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };

//My Solution  
let vehicleKeys = Object.keys(vehicle);

console.log('vehcileKeys',vehicleKeys);

// Alternate Solution
let vehicleKeys1 = [];
for(let property in vehicle){
    vehicleKeys1.push(property);
}
