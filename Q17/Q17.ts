// Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

//Inform the guests that new dinner table wont arrive at time
console.log("Unfortunately, new dinner table won't arrive at time, so I can invite two peoples only for dinner.")

//Using while loop to remove guests from the array until two peoples left
while(guestsList.length > 2){
    let removedGuest = guestsList.pop();
    console.log(`Sorry, ${removedGuest} I cannot invite you to dinner`)
}

//Sending invitation to the last two guests
console.log("Invitation to the last two guests.");
guestsList.forEach(lastTwo => console.log(`Luckily, ${lastTwo} you are still invited for a dinner.`));

//Removing last two guests from the list
guestsList.pop();
guestsList.pop();

console.log("Empty List, guestsList");

