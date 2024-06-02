/* Take your code from the previous Check the Weather 
exercise and rewrite it as a switch statement. Feel free 
to add more cases besides 'sunny' and 'rainy'*/

//Solution

let weather = "sunny";

switch(weather){
    case 'rainy':
        console.log('grab an umbrella');
        break;
    case 'cloudy':
        console.log('no sunglasses needed');
        break;
    case 'sunny':
        console.log('Grab your sunscreen');
        break;
    default:
        console.log('The weather is okay');

}