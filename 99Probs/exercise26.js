/* Take a moment to read the MDN documentation on the continue statement. 
Then write a for loop that loops over the elements of the array cities 
and logs the length of each string to the console. If the element is null, 
skip forward to the next iteration without logging anything to the console.
*/
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

//Solution

for(let i = 0; i < cities.length; i++){
    if(cities[i] === null){
        continue;
    }
    console.log('length of each string', cities[i].length);
}