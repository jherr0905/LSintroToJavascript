// Determine monthly payment assuming interest compounded monthly

//P
//inputs:
// 1. loan amount 2. APR - interest rate 3. loan duration

//outputs:
// monthly payment - payment amount as a dollar and cents amount, e.g., $123.45 

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// Loan Amount
function getLoanAmount() {
  prompt('What is the loan amount?');
  let loanAmount = readline.question();
  
  let cleanedAmount = loanAmount.replace(/[^0-9.]/g, '');
  let parsedAmount = parseFloat(cleanedAmount);
  
  if (isNaN(parsedAmount) || parsedAmount < 5000 || parsedAmount > 100000) {
    console.log('Please enter a valid loan amount between $5,000 and $100,000.');
    return getLoanAmount();
  } 
  return parsedAmount;
}

// APR - interest rate
function getInterestRate() {
  prompt('What is the interest rate?');
  let interestRate = readline.question();

  let cleanedInterestRate = interestRate.replace(/[^0-9.]/g, '');
  let parsedInterestRate = parseFloat(cleanedInterestRate);

  if (isNaN(parsedInterestRate) || parsedInterestRate < 0 || parsedInterestRate > 1000) {
    console.log('Please enter a valid interest rate between 0 and 1,000');
    return getInterestRate();
  }

  let rate3Decimals = parsedInterestRate.toFixed(3);
  return parseFloat(rate3Decimals);
}

// Loan duration
function getLoanDuration() {
  prompt('What is the term of the loan in months?');
  let loanDuration = readline.question();

  let cleanedLoan = loanDuration.replace(/[^0-9]/g, '');
  let parsedLoanDuration = parseInt(cleanedLoan, 10);

  if (isNaN(parsedLoanDuration) || parsedLoanDuration < 12 || parsedLoanDuration > 96) {
    console.log('Please enter a valid loan term between 12 and 96 months.');
    return getLoanDuration();
  }

  return parsedLoanDuration;
}

let loanAmount = getLoanAmount();
console.log('Loan amount:', loanAmount);

let interestAmount = getInterestRate();
console.log('Interest rate: ', interestAmount);

let loanDuration = getLoanDuration();
console.log('Loan term: ', loanDuration);

// Convert annual interest rate to a monthly decimal rate
let monthlyRate = (interestAmount / 100) / 12;
let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), -loanDuration)));
let twoDecimalsMonthlyPymnt = monthlyPayment.toFixed(2);

console.log(`Here is your monthly payment: $${twoDecimalsMonthlyPymnt}` );













//Edgecases
//loan amount- user might enter comma or $, and/or decimal for loan amount, also a non number
  //min loan amount is $5,000 .. max 100,000
//interest rate - how a user might enter it, 5 as in 5%, there can be zero 0 interest loan - max 1,000
  //interest rate must be entered like this digits: 3.625
// loan duration - 1 - 8 yrs,  0 is not valid, -neg numbers not valid, including 8.. but not over 8
  //min term is 12 months

