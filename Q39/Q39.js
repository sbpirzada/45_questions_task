//Q39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
//Creating a function with parameters which returns a value in string
function city_country(city, country) {
    return `${city} , ${country}`;
}
//Calling a function and print a returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("London", "England"));
export {};
