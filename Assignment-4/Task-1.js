// Study the following program and complete the table. You may execute this program:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calculate() {
    let value1, value2, value3;
    
    await new Promise(resolve => {
        readline.question("Enter the number: ", input => {
            value1 = Number(input);
            resolve();
        });
    });
    
    value2 = 2 * Math.pow(value1, 2.0);
    value3 = 3 + value2 / 2 - 1;
    console.log(value3);
    readline.close();
}

calculate();

