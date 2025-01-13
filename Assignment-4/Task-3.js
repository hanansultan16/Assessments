// Write an algorithm that asks user to enter a golfer's score for three games 
// of golf and then display the average of three scores. After you write algorithm, 
// convert it into complete JavaScript program.

let prompt = require('prompt-sync')();
let game1 = parseInt((prompt("Please enter game 1 score: ")));
let game2 = parseInt((prompt("Please enter game 2 score: ")));
let game3 = parseInt((prompt("Please enter game 3 score: ")));

let average = (game1 + game2 + game3) / 3;

console.log(`The average score is: ${average}`);
