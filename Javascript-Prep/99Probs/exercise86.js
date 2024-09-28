/* Implement a function catAge that takes a number of human years 
as input and converts them into cat years. Cat years are calculated 
as follows:
The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years. */

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

// My solution
function catAge(number){
    if(number <= 0){
        return 0;
    }else if(number === 1){
        return 15;
    }else if (number === 2) {
      return 24;
    }else {
    let firstYear = 15;
    let secondYear = 9;
    
    let sumOf1stand2ndyear = firstYear + secondYear;

    let additionalYears = (number - 2) * 4;
    return sumOf1stand2ndyear + additionalYears;
    }

  
}
console.log(catAge(0))