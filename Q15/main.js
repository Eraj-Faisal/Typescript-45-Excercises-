// I heard that Rabia will not come to my dinner so I invite one other friend instead of her.
var people = ["rabia", "Samiya", "Manal ", "Horain"];
people.splice(0, 1, "Sundus");
//print new list
console.log(people);
//print one by one message for my guests .
people.forEach(function (guest) { return console.log("Hi ".concat(guest, ", would you like to dinner with us?")); });
