/**
Write a function wordFrequency(text) that takes a string and returns an object representing the frequency of each word in the string.
The function should be case-insensitive (e.g., "Hello" and "hello" count as the same word).
Ignore punctuation (e.g., "hello," and "hello" should be treated the same).
The result should be an object where the keys are words and the values are their counts.
 
 */

//console.log(wordFrequency("Hello world! Hello, JavaScript world."));
//{ hello: 2, world: 2, javascript: 1 }

//pedac
//problem
//inputs: astring
//outputs: object representing frequency each word in astring

//edgecase: ignore punctuation, case insensitive, ex hello Hello count as same word

//datastructure: object
//algorithm
//make a function called wordFrequency takes in astring
// take the whole string and put it into an array like this 'hello'
//get object make our words our key, as we iterate thru our array of words add a counter if word is already in object
//else add word and 1 as counter
//log our object

//code 

function wordFrequency(astring){
    astring = astring.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "");
    let stringArray = astring.split(' ')
    let ourObject = {}

   stringArray.forEach(element => {
        if(ourObject[element]){
            ourObject[element] += 1
        }else{
            ourObject[element] = 1
        }
    console.log(ourObject)
   })
    return ourObject
}

console.log(wordFrequency("Hello world! Hello, JavaScript world."));