// A soft drink company recently surveyed 12,467 of its customers and found that 
// approximately 14 percent of those surveyed purchase one or more energy drinks per week. 
// Of those customers who purchase energy drinks, approximately 64 percent of them prefer citrus flavored energy drinks. 
// Write a program that displays the following:

// The approximate number of customers in the survey who purchase one or more energy drinks per week
// The approximate number of customers in the survey who prefer citrus flavored energy drinks

const surveyedCostumers = 12467;
const perWeekEnergyDrinksBuying = surveyedCostumers * 0.14;
const preferCitrusFlavor = perWeekEnergyDrinksBuying * 0.64;

console.log(`According to survey approximately ${perWeekEnergyDrinksBuying} users buy our Energy Drinks per week.`);
console.log(`According to survey approximately ${preferCitrusFlavor} users like Citrus flavored energy drinks.`);
