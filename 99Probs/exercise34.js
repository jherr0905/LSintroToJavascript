/* Initialize a variable weather with a string value being "sunny", "rainy", 
or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.*/

let weather = "sunny";

if(weather){
    console.log('Its a beautiful day');
}else if(weather === "rainy"){
    console.log('Grab your umbrella')
}else{
    console.log('Lets stay inside')
}