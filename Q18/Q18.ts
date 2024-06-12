// Q18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//Making an array and print it in its original order
let countriesToVisit : string[] = ["Switzerland", "United Kingdom", "China", "Australia"];

console.log("Original Order:", countriesToVisit);

//Print the array in Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

//Print the Array in Recersed Order without modifying the Actual Array List
console.log("Reversed Order:", [...countriesToVisit].reverse());

//Show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

//We have changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

//Print the array to show that it's back to its Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//We have changed again the Original Array Order Now in Reverse Order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());