// There are three seating categories at a stadium. For a softball game, 
// Class A seats costs Rs. 2000, Class B seats cost Rs. 1000, and class C seats cost Rs. 500. 
// Write a program that asks how many tickets for each class of seats were sold, 
// then display the amount of income generated from ticket sale.

let classA = 2000;
let classB = 1000;
let classC = 500;

let prompt = require('prompt-sync')();
let classASeats = parseInt((prompt("How many tickets of Class A seats were sold: ")));
let classBSeats = parseInt((prompt("How many tickets of Class B seats were sold: ")));
let classCSeats = parseInt((prompt("How many tickets of Class C seats were sold: ")));

let AclassAmount = classASeats * classA;
let BclassAmount = classBSeats * classB;
let CclassAmount = classCSeats * classC;

let amountGenerated = AclassAmount + BclassAmount + CclassAmount;

console.log(`Total income generated from ticket sale is: ${amountGenerated}`);


// no cheating just pure code. Thank you