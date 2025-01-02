const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calculateArea() {
    let length, width, area;
    
    console.log("This program calculates the area of a rectangle.\n");
    
    await new Promise(resolve => {
        readline.question("Enter the Length of Rectangle: ", input => {
            length = Number(input);
            resolve();
        });
    });
    
    await new Promise(resolve => {
        readline.question("Enter the Width of Rectangle: ", input => {
            width = Number(input);
            resolve();
        });
    });
    
    area = length * width;
    console.log("The area of rectangle is " + area);
    readline.close();
}

calculateArea();