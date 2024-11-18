const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];


function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
    return 'player';
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
    return 'computer';
  } else {
    prompt("It's a tie!");
    return 'tie';
  }

}

function prompt(message) {
  console.log(`=>${message}`);
}

// best of 5
//if player or pc reaches 3 wins the match is over
let playerCounter = 0;
let computerCounter = 0;

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice!");
    choice.readline.question();
  }

  let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let displaytheWinner = displayWinner(choice, computerChoice);

  if  (displaytheWinner === 'player') {
    playerCounter++;
  } else if (displaytheWinner === 'computer') {
    computerCounter++;
  }

  if (playerCounter === 3) {
    prompt('player grand winner');
    break;
  } else if (computerCounter === 3) {
    prompt('computer grand winner');
    break;
  }


  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    return null;
  }
}