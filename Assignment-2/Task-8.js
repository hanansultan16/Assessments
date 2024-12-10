// Assuming the ocean's level is currently rising at about 1.5 millimeters per year, write a program that displays:

// The number of millimeters higher than the current level that the ocean's level will be in 5 years
// The number of millimeters higher than the current level that the ocean's level will be in 7 years
// The number of millimeters higher than the current level that the ocean's level will be in 10 years


function currentOceanLevel(oceanLevel = 101.4) {
    const risingPerYear = 1.5;
    const firstFiveYears = 5;
    const afterFiveYears = risingPerYear * firstFiveYears;
    const totalAfterFiveYears = oceanLevel + afterFiveYears;
    const firstSevenYears = 7;
    const afterSevenYears = risingPerYear * firstSevenYears;
    const totalAfterSevenYears = oceanLevel + afterSevenYears;
    const afterTenYears = (risingPerYear * firstFiveYears) * 2;
    const totalAfterTenYears = oceanLevel + afterTenYears;

    console.log(`Ocean level after five years is: ${totalAfterFiveYears}mm.`);
    console.log(`Ocean level after Seven years is: ${totalAfterSevenYears}mm.`);
    console.log(`Ocean level after Ten years is: ${totalAfterTenYears}mm.`);
}

currentOceanLevel();

