const readline = require('readline-sync');

const MIN_LOAN_AMOUNT = 5000;
const MAX_LOAN_AMOUNT = 100000;
const MIN_INTEREST_RATE = 0;
const MAX_INTEREST_RATE = 1000;
const MIN_LOAN_DURATION = 12;
const MAX_LOAN_DURATION = 96;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getValidInput(promptMessage, validateFn) {
  prompt(promptMessage);
  let userInput = readline.question();
  let cleanedInput = userInput.replace(/[^0-9.]/g, '');
  let parsedInput = parseFloat(cleanedInput);
  
  while (!validateFn(parsedInput)) {
    console.log('Invalid input. Please try again.');
    prompt(promptMessage);
    userInput = readline.question();
    cleanedInput = userInput.replace(/[^0-9.]/g, '');
    parsedInput = parseFloat(cleanedInput);
  }
  
  return parsedInput;
}

// Validation functions
function isValidLoanAmount(amount) {
  return !isNaN(amount) && amount >= MIN_LOAN_AMOUNT && amount <= MAX_LOAN_AMOUNT;
}

function isValidInterestRate(rate) {
  return !isNaN(rate) && rate >= MIN_INTEREST_RATE && rate <= MAX_INTEREST_RATE;
}

function isValidLoanDuration(duration) {
  return !isNaN(duration) && duration >= MIN_LOAN_DURATION && duration <= MAX_LOAN_DURATION;
}

const loanAmount = getValidInput('What is the loan amount?', isValidLoanAmount);
const interestRate = getValidInput('What is the interest rate? (in percentage, e.g., 5 for 5%)', isValidInterestRate);
const loanDuration = getValidInput('What is the term of the loan in months?', isValidLoanDuration);

const monthlyRate = (interestRate / 100) / 12;
const monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), -loanDuration)));

console.log(`Here is your monthly payment: $${monthlyPayment.toFixed(2)}`);
