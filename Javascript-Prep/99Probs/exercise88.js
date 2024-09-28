/* Refactor the function below using arrow syntax. 
Line 9 should still log the same sentence.*/


const template1 = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template1
    .replace('VERB', verb)
    .replace('NOUN', noun);
}



const template = 'I VERB NOUN.';

//My Solution
let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.
