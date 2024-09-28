/* We are given the following array of energy sources.*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

energy.shift();
console.log(energy);

energy.splice(4,1,'geothermal');

console.log(energy);