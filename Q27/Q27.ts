// Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor = "White";

if(alienColor === "White"){
    console.log("You shot down white alien you have earned 5 points.");
}

else if(alienColor === "Pink"){
    console.log("You shot down pink alien you have earned 10 points.");
}

else if(alienColor === "Yellow"){
    console.log("You shot down yellow alien you have earned 15 points.");
}

//Version 2
let alienColor2 = "Pink"

if(alienColor2 === "White"){
    console.log("You shot down white alien you have earned 5 points.");
}

else if(alienColor2 === "Pink"){
    console.log("You shot down pink alien you have earned 10 points.");
}
    
else if(alienColor2 === "Yellow"){
    console.log("You shot down yellow alien you have earned 15 points.");
}

//Version 3
let alienColor3 = "Yellow"

if(alienColor3 === "White"){
    console.log("You shot down white alien you have earned 5 points.");
}

else if(alienColor3 === "Pink"){
    console.log("You shot down pink alien you have earned 10 points.");
}
    
else if(alienColor3 === "Yellow"){
    console.log("You shot down yellow alien you have earned 15 points.");
}

