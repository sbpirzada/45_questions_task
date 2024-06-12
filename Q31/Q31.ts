// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = ["Aariz", "Mahir", "Admin", "Abdullah", "Hayat"]

if(userNames.length === 0){
    console.log("Your array is empty, we need to find some users.")
}else{
    //Using ForEach Loop on Array
    userNames.forEach(oneUser => {
        if(oneUser === "Admin"){
            console.log(`Hello! ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello! ${oneUser}, thank you for logging in again.`)
        }
    })
}