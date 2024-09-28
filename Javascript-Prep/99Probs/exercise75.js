/* Count the number of elements in scores that are 100 or above.*/

let scores = [96, 47, 113, 89, 100, 102];

//loop thru my scores array..
// keep a counter variable for elements 100 >
// show that counter variable...

let counter = 0;
for(let i = 0; i < scores.length; i++){
   // console.log(scores[i]);
    if(scores[i] >= 100){
        counter++;
    }
 
}

console.log(counter);