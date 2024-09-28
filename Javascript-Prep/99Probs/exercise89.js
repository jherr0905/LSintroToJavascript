/* The function initGame below returns an object. 
Refactor it using arrow function syntax.*/

let initGame1 = function () {
    return {
      level: 1,
      score: 0
    }
  };
  
  let game1 = initGame();
  
  console.log('Level: ' + game.level);
  console.log('Score: ' + game.score);

//My Solution, the () tells Javascript to
//interpret the  { } curly as object literal
let initGame = () => ({
      level: 1,
      score: 0
  });
  
  let game = initGame();
  
  console.log('Level: ' + game.level);
  console.log('Score: ' + game.score);