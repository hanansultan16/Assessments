// Write an if/else statement that assigns 0.10 to the commisionRate unless sales is greater
// than or equals to 50,000, in which case it assigns 0.20 to commissionRate.

const sales = 50000;
let commissionRate = 0.10;
let commissionRateAfter = 0.20;

let prompt = require('prompt-sync')();
totalSales = parseInt((prompt("Please enter sales amount: ")));

if (totalSales > sales) { 
    console.log(`Sales are greater than ${sales} that's why the commission rate is ${commissionRateAfter}`);
    
} else {
    console.log(`Sales are less than ${sales} so the commission rate is ${commissionRate}`);
}
