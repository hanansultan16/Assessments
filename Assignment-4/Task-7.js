// Write a program which accepts amount as integer and display total number of Notes of 
// Rs. 500, 100, 50, 20, 10, 5 and 1. For example, when user enter a number, 575, the results would be like this:

// 500: 1
// 100: 0
// 50: 1
// 20: 1
// 10: 0
// 5: 1
// 1: 0


function count(amount)
{
    const notes = [500, 100, 50, 20, 10, 5, 1];
    let result = {};  

    for (let i = 0; i < notes.length; i++) {
        if (amount >= notes[i]) {
            result[notes[i]] = Math.floor(amount / notes[i]);
            amount = amount % notes[i];
        }
    }
    return result;
}
let prompt = require('prompt-sync')();
let amount = parseInt((prompt("Please enter the amount: ")));


const cash = count(amount);

console.log("Notes Breakdown: ");
const notes = [500, 100, 50, 20, 10, 5, 1];
for (const note of notes) {
    console.log(`${note}: ${cash[note] || 0}`);
}


// is mein cheating ki hai mein ne... sorry