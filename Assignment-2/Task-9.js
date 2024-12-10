// One acre of land is equivalent to 43,560 square feet. 
// Write a program that calculates the number of acres in the tract of land with 389,767 square feet.


const oneAcreSquareFoot = 43560;
const oneAcreLand = 1;
const numberOfAcresRequired = 389767;

const total = numberOfAcresRequired / oneAcreSquareFoot;

console.log(`The number of acres in 389,767 Square feet is: ${total}`);
