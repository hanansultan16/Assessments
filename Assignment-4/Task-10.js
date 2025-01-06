// A movie theater only keeps 20 percent of the revenue earned from ticket sale. 
// The remainder goes to the movie distributor. Write a program that calculates a theater's gross 
// and net box office profit for a night. The program should ask for:

// Name of the movie
// How many adult and child tickets were sold
// If an adult is above sixty then a further 10 percent discount is offered
// The price of adult ticket is Rs. 500 and for child is Rs. 250
// The program should display report similar to:

// Movie Name "Action"
// Adult Tickets Sold 382
// Child Ticket Sold 127
// Adults Above 60 10
// Gross Box Office Profit Rs.
// Net Box Office Profit Rs.
// Amount Paid to Distributor Rs.

let prompt = require('prompt-sync')();
let movieName = prompt("Please enter the movie name: ");
let adultTicketSold = parseInt(prompt("How many adult tickets were sold: "));
let childTicketSold = parseInt(prompt("How many child tickets were sold: "));
let above60TicketSold = parseInt(prompt("How many tickets were sold of adults above 60: "));

let adultTicketPrice = 500;
let childTicketPrice = 250;
let above60Discount = adultTicketPrice * 0.10;
let above60TicketPrice = adultTicketPrice - above60Discount;

let regularAdultTickets = adultTicketSold - above60TicketSold;
let adultTicketRevenue = regularAdultTickets * adultTicketPrice;
let childTicketRevenue = childTicketSold * childTicketPrice;
let above60TicketRevenue = above60TicketSold * above60TicketPrice;

let grossProfit = adultTicketRevenue + childTicketRevenue + above60TicketRevenue;

let netProfit = grossProfit * 0.20;
let distributorProfit = grossProfit * 0.80;

console.log(`Movie Name is: ${movieName}`);
console.log(`Adult Tickets Sold: ${adultTicketSold}`);
console.log(`Child Tickets Sold: ${childTicketSold}`);
console.log(`Adults Above 60: ${above60TicketSold}`);
console.log(`Gross Box Office Profit is: Rs${grossProfit}`);
console.log(`Net Box Office Profit is: Rs${netProfit}`);
console.log(`Amount paid to Distrbuuter is: Rs${distributorProfit}`);
