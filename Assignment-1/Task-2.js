
// Following algorithm has an error. The program is supposed to ask the user for the length and width of a rectangular room, and 
// then display the room's area. The program must multiply the width by length in order to determine the area.

// area = width into length
// Display "What is Room's Width"
// Input width
// Display "What is Room's Length"
// Input length
// Display area

let prompt = require('prompt-sync')();

let length = prompt("What is Room's Length: ");
let width = prompt("What is Room's Width: ");

let area = length * width;

console.log(`The Area of room is: ${area}`);
