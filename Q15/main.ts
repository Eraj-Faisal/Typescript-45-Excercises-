// I heard that Rabia will not come to my dinner so I invite one other friend instead of her.

let people = ["rabia" , "Samiya" , "Manal " , "Horain"];

people.splice(0, 1, "Sundus");

//print new list
console.log(people)

//print one by one message for my guests .
people.forEach(guest => console.log(`Hi ${guest}, would you like to dinner with us?`));