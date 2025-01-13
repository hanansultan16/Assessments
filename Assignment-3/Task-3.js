// The following code is syntactically correct, but it appears to contain a logical error. 
// Can you find the error? Identify and rewrite the correct one. Give reason.

let prompt = require('prompt-sync')();
let score = parseInt(prompt("Please enter score: "));

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else
    grade = "F";

    console.log(`You got grade ${grade}`);


// else statement was not defined which let every statement true and print last possible value