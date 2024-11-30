
// Design an algorithm to find the perimeter and area of rectangle. Formula used to find the solution are
// Perimeter = 2 (length + width)
// Area = length width


let prompt = require('prompt-sync')();

let length = parseInt(prompt("What is Room's Length: "));
let width = parseInt(prompt("What is Room's Width: "));

let perimeter = 2 * (length + width);

let area = length * width;

console.log(`The Perimeter of Rectangle is: ${perimeter} and the Area of Rectangle is: ${area}`);
