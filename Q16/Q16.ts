// Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

//Created an array with a name guestsList
let guestsList : string[] = ["Ruqia", "Saeeda", "Saba", "Hafsa"]

//create a variable for the persoons who cannot come.
let canNotAttend : string = guestsList [1] //write ony "Saeeda"

//Print the message witg the persons's name who cannot come.
console.log(canNotAttend, "Cannot come.")

//Removed and add/replace one element in an array 
//splice function add or remove the element/s anywhere in an array 
guestsList.splice(1, 1, "Aisha");// first 1 is the index number and second 1 is the number of elements to be removed from array.

//Print a message for a bigger table.
console.log("Good News! We have found a bigger table for a Dinner.")

//Adding a new guest in the starting index of an array.
//unshift function add one element in the beginning of an array.
guestsList.unshift("Aariz");

//Adding a new guest at the ending index of array.
guestsList.push("Mahir");

//Get a middle index of our guest list array
let middleIndex : number = Math.floor(guestsList.length / 2);
//Math.foor function round off the number of an array if it is in a odd number
//length function check and give total number of elements in an array

//Adding a new guest in the middle index of array
guestsList.splice(middleIndex, 0, "Hayat");

//Print message of updated list
console.log("Updated list of our guest");

//Sending an invitation to our guests one by one with their names.
guestsList.forEach(oneGuest => console.log(`Salam! ${oneGuest}, you are cordiallty invited to a Dinner.`))

