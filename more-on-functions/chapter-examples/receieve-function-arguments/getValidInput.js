const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWtihA = function(n) {
  return n.toLowerCase().slice(0,1) === "a";
}
// console.log(startsWtihA("andrew"));

// TODO 2: write a validator  
// that ensures input is a vowel
let containsVowel = function(n) {
  let result;
  if (n.includes("a")|| n.includes("e") || n.includes("i") || n.includes("o") || n.includes("u") === true){
    result = true;
  } else {
    result = false;
  }
  return result
}
// console.log(containsVowel("andrew"));
// console.log(containsVowel("tryk"));

// Be sure to test your code!
getValidInput("Enter valid input starting with 'a' ", startsWtihA);
getValidInput("Enter input containing a vowel ", containsVowel);