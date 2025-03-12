/* TODO - need help with this.. 

Function and method calls can take expressions as arguments. 
Suppose we define a function named rps as follows, which follows
 the classic rules of the rock-paper-scissors game, but with a 
 slight twist: in the event of a tie, it just returns the choice 
 made by both players. */

 function rps(fist1, fist2) {
    if (fist1 === "rock") {
      return fist2 === "paper" ? "paper" : "rock";
    } else if (fist1 === "paper") {
      return fist2 === "scissors" ? "scissors" : "paper";
    } else {
      return fist2 === "rock" ? "rock" : "scissors";
    }
  }

  //What does the following code output?

  console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

  //this what I have so far but i don't know what to do next, don't wanna gpt it bc it gives me the answer and that is not what i want lol 
  // i wanna be able to solve this stuff on my own.
//(rps(rps('paper', 'rock'), "rock"))

