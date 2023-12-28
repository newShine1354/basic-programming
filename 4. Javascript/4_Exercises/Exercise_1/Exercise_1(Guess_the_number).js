const prompt = require("prompt-sync")()

// Exercise 1: Guess the number
// Generate random number here
// Keep asking for the number until the correct number is guessed
// Increment the chances variable
// Eventually after the game is over, display the (100 - Number of chances) and the actual number 
// Returns a random integer from 0 to 9:
// Math.floor(Math.random() * 10);
// Returns a random number:
console.log(Math.random()); // Always returns number less than 1.

// Returns a random integer from 0 to 9:
// Math.floor(Math.random() * 10); // The Math.floor() method rounds a number DOWN to the nearest integer.

// Returns a random integer from 1 to 10:
// Math.floor(Math.random() * 10) + 1;

// Solution:
let randomNumber = Math.floor(Math.random() * 10)

// While loop
let userInput;
i = 0;
while (userInput != randomNumber) {
    userInput = Number(prompt("Enter integer between 1 and 10: \n"))
    if (userInput > randomNumber) {
        console.log(`Your(${userInput}) number is greater than random(${randomNumber}) number`);
        console.log('Try again');
    }
    else if (userInput < randomNumber) {
        console.log(`Your(${userInput}) number is smaller than random(${randomNumber}) number`);
        console.log('Try again');
    }
    else {
        console.log(`Congratulations your(${userInput}) number is equal to the random number.`);
        console.log(`Your scores are ${10 - i}`);
        break;
    }
    i++;
}

// For loop
// for (let i = 0; i < 100; i++) {
//     userInput = Number(prompt("Enter integer between 1 and 10: \n"))
//     if (userInput > randomNumber) {
//         console.log(`Your(${userInput}) number is greater than random(${randomNumber}) number`);
//         console.log('Try again');
//     }
//     else if (userInput < randomNumber) {
//         console.log(`Your(${userInput}) number is smaller than random(${randomNumber}) number`);
//         console.log('Try again');
//     }
//     else {
//         console.log(`Congratulations your(${userInput}) number is equal to the random number.`);
//         console.log(`Your scores are ${10 - i}`);
//         break;
//     }
// }

