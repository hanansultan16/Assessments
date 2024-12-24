// Write an if statement that performs the following logic: 
// if the variable sales is greater than 50,000 then assign 0.25 
// to the variable commissionRate and assign 250 to the variable bonus.

const sales = 50000;
let totalSales;
let commissionRate = 0.25;
let bonus = 250;

let prompt = require('prompt-sync')();
totalSales = parseInt((prompt("Please enter sales amount: ")));

if (totalSales > sales) { 
    console.log(`The person will get the commission of Rs.${commissionRate} and bonus Rs.${bonus}`);
    
} else {
    console.log(`Sales are less than ${sales}`);
}

