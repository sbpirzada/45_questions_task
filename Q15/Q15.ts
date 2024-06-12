// Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

//Mthod 1
//step 1
// let guests : string[] = ["Ruqia", "Saeeda", "Saba", "Hafsa"]

// console.log(guests);// To print array with bracket

// //step 2
// let canNotAttend : string = "Saeeda";
// console.log(canNotAttend + " " + "can not make for a dinner." );//Print variable name with concatenation of a messagge.

// //step 3
// let newGuest : string = "Aisha";

// guests[guests.indexOf(canNotAttend)] = newGuest

// guests.map((items)  => console.log(`Dear ${items}, you are cordially invited to a dinner.` ));

// let guests : string[] = ["Ruqia", "Saeeda", "Saba", "Hafsa"]

// console.log(guests);// To print array with bracket

let guestsList : string[] = ["Ruqia", "Saeeda", "Saba", "Hafsa"]
let canNotAttend : string = guestsList [1] //write ony "Saeeda"

console.log(canNotAttend, "Cannot come.")

//splice function add or remove the element/s anywhere in an array 
guestsList.splice(1, 1, "Aisha");// first 1 is the index number and second 1 is the number of elements to be removed from array.

guestsList.forEach(guest => console.log(`Salam ${guest}, you are cordially invited for a dinner.`))