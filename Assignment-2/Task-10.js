// Kathryn bought 600 shares of stock at a price of Rs. 21.77 per share. 
// She must pay her stock broker a 2 percent commission for the transaction. 
// Write a program that calculates and displays the following:

// The amount paid for the stock alone (without the commission)
// The amount of the commission
// The total amount paid (for the stock plus the commission)

const sharesBought = 600;
const amountPaidforStock = sharesBought * 21.77;
const paidToBroker = (amountPaidforStock * 2) / 100;
const totalAmountPaid = amountPaidforStock + paidToBroker;

console.log(`Amount paid for stock share is: ${amountPaidforStock}`);
console.log(`Amount paid to Broker is: ${paidToBroker}`);
console.log(`Total amount Kathryn paid is: ${totalAmountPaid}`);
