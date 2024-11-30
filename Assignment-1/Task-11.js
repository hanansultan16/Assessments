
// Design an algorithm to calculate the sales tax and price of an item sold in a particular state. 
// The sales tax is calculated as follows. The sate's portion of sales tax is 4% and the city's portion of sales tax is 1.5%.
// if cost of item is more than 50000 then a luxury tax of 10% is applicable.



let prompt = require('prompt-sync')();

let itemCost = parseInt(prompt("Please give the price of item: "));

let stateTax = itemCost * 0.04;

let cityTax = itemCost * 0.015;

let luxuryCost = 0;

if (itemCost >= 50000 ) {
    luxuryCost = itemCost * 0.10;
};

let totalTax = stateTax + cityTax + luxuryCost;

let finalPrice = itemCost + totalTax;

console.log(`The price of the item is: ${finalPrice}`);
