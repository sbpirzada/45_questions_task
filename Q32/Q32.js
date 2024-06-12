//Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a    unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Array of Current Users
let current_users = ["Aariz", "Mahir", "Surahi", "Abdullah", "Hayat"];
//Array of New Users
let new_users = ["Sarmad", "mahir", "Ayesha", "Safhan", "HAYAT"];
//Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {
    // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //Print different messages
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This username ${new_one_user} is available.`);
    }
});
export {};
