// A bag of cookies holds 40 cookies. The calories information on the bag claims 
// that there are 10 "servings" in the bag and that a serving equals to 300 calories. 
// Write a program that asks the user to input how many cookies he or she actually ate 
// and then report how many total calories were consumed.


let servings = 10;
let totalCookies = 40;
let caloriesPerServing = 300;
let caloriesPerCookie = (caloriesPerServing * servings) / totalCookies;

let prompt = require('prompt-sync')();
let cookiesEaten = parseInt((prompt("How many cookies you have eaten? ")));

if (cookiesEaten >= 0 && cookiesEaten <= 300) {
    let caloriesConsumed = cookiesEaten * caloriesPerCookie;
    console.log(`You have consumed ${caloriesConsumed} calories.`);
} else {
    console.log("Please write a value between 0 to 300.");
}