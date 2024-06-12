// Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Define Variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Banana", "Mango", "Watermelon"];
//Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Tests using Lower Case Function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");
// //Numerical Tests
// // Is Equal to
console.log("\Is ten is equal to twenty?");
console.log(ten == twenty);
// //Is not Equal to
console.log("\Is ten is not equal to twenty?");
console.log(ten != twenty);
// //Greater than
console.log("\Is ten is greater than zero?");
console.log(ten > 0);
// //Less than
console.log("\Is twenty is less than 10?");
console.log(twenty < 10);
// //Greater than or Equal to
console.log("\Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// //Less than or Equal to
console.log("\Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
// //Tests using "and" or "or" operators
// //Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// //Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// //Test whether an item is included in an array
console.log("\n Is Watermelon is included in my Fruits Array?");
console.log(fruits.includes("Watermelon"));
// //Not Included
console.log("\n Is Watermelon not included in my Fruits Array?");
console.log(!fruits.includes("Watermelon"));
export {};
