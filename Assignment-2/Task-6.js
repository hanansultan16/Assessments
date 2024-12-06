

let mealCost = 4450;


let taxAmount = (mealCost * 6.75) / 100;

let tipAmount = ((mealCost + taxAmount) * 15) / 100;


let totalBill = mealCost + taxAmount + tipAmount;

console.log(`Meal cost is: ${mealCost}`);
console.log(`Tax amount in Meal is: ${taxAmount}`);
console.log(`Tip amount is: ${tipAmount}`);
console.log(`Total Bill is: ${totalBill}`);
