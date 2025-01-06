// Write a program that calculates the average rainfall for three months. 
// The program should ask the user to enter the name of month, 
// such as June or July and the amount of rain (in millimeters) that fell each month. 
// The program should display a message similar to the following: 
// "The average rain for July, August & September is 20.65 millimeter."

let prompt = require("prompt-sync")();
let firstMonth = (prompt("Please enter the name of Month: "));
let firstMonthRain = parseInt(prompt("Please enter the amount of rain (in millimeter): "));
let secondMonth = (prompt("Please enter the name of Month: "));
let secondMonthRain = parseInt(prompt("Please enter the amount of rain (in millimeter): "));
let thirdMonth = (prompt("Please enter the name of Month: "));
let thirdMonthRain = parseInt(prompt("Please enter the amount of rain (in millimeter): "));

let averageRain = (firstMonthRain + secondMonthRain + thirdMonthRain) / 3;

console.log(`The average rain in month of ${firstMonth}, ${secondMonth} and ${thirdMonth} is: ${averageRain} millimeters.`);
