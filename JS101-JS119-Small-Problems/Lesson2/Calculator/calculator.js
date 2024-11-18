const welcomeMessages = require('./calculator-messages.json')
const readline = require('readline-sync');
const LANGUAGE = 'en';

function prompt(key) {
  let message = messages(key, LANGUAGE)
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang = 'en'){
  return welcomeMessages[lang][message]
}



prompt('welcomeMessage')
let anotherCalculation;
do {
  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('options');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  //ask the user if they wanted to perform another calculation
  prompt('anotherOperation');
  anotherCalculation = readline.question();
  while (!['Y', 'y', 'N', 'n'].includes(anotherCalculation)) {
    prompt('optionsYorN');
    anotherCalculation = readline.question();
  }
} while (anotherCalculation === 'Y' || anotherCalculation === 'y')