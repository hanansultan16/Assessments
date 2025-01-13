// A retail store grants its customers a maximum amount of credit. 
// Each customer's available credit is their maximum amount of credit minus the amount of credit used.
// Write a pseudo code on paper that asks for a customer's maximum amount of credit and amount of credit used. 
// The program should display the remaining credit. Convert this algorithm into a complete JavaScript program in your lab.

let prompt = require('prompt-sync')();
let totalSales = parseInt((prompt("Please enter your total amount of credit: ")));

let creditUsed = parseInt(prompt("Please enter the amount of credit used: "));

let remainingCredit = totalSales - creditUsed;

console.log(`The remaining credit is: ${remainingCredit}`);
