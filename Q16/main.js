//Create a Guest list Array
var people = ["Samiya", "Rabia", "Areeba", "Manal"];
//make a variable for Samiya who cant come
var dontcome = people[0];
//Print the name of our guest , who can't come to the dinner
console.log(dontcome, "Can't make the dinner.");
//add and remove the value from guest list array
people.splice(0, 1, "Habiba");
//add Habiba instead of Samiya and print list.
console.log("We add Habiba instead of Samiya");
console.log(people);
//print messege for the bigger table
console.log("Hey, We arranged a Bigger Dinner Table for you Guys");
//adding a new guest on starting index of the list
people.unshift("Horain");
//adding a new guest on the end of the list
people.push("Maria");
//Get a middleindex fom the array
var middleIndex = Math.floor(people.length / 2);
//adding a new guest at the middle index
people.splice(middleIndex, 0, "Uzma");
console.log("Updated list of our Guests");
console.log(people);
//sending messege for invitation to our guest one by one. 
people.forEach(function (newGuests) { return console.log("Salam ".concat(newGuests, " would You like to Dinner with me")); });
