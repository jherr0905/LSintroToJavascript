const readline = require('readline-sync');

function prompt(message){
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

let loanAmount = getLoanAmount();
console.log('Valid loan amount:', loanAmount);

// APR - interest rate
function getInterestRate() {
  prompt('What is the interest rate?');
  let interestRate = readline.question();
  let cleanedInterestRate = interestRate.replace(/[^0-9.]/g, '');

  let parsedInterestRate = parseFloat(cleanedInterestRate);

  // Check if the interest rate is a valid number greater than 0 and less than or equal to 1000
  if (isNaN(parsedInterestRate) || parsedInterestRate <= 0 || parsedInterestRate > 1000) {
    console.log('Please enter a valid interest rate (between 0 and 1000).');
    return getInterestRate();
  }

  return parsedInterestRate.toFixed(3);
}

let interestAmount = getInterestRate();
console.log('Valid interest rate:', interestAmount);

