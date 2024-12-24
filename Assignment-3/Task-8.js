// The following code is used in a book store program to determine how many discount coupons a customer gets.
// What are the number of coupons if a customer purchase 1,3,4,5,7 or 10 books.

let prompt = require('prompt-sync')();
let books = parseInt(prompt("Enter the books count: "));

if (books >= 1 && books < 3)
    coupons = 1;
else if (books >= 3 && books < 5)
    coupons = 2;
else if (books >= 5)
    coupons = 3;
else
    coupons = 0;


    console.log(`You will get ${coupons} coupons`);
    