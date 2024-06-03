//Create a Guest list Array
let people =["Samiya" , "Rabia" , "Areeba" , "Manal"];

//print messege for the bigger table
console.log("Hey, We arranged a Bigger Dinner Table for you Guys");

//adding a new guest on starting index of the list
people.unshift("Horain");

//adding a new guest on the end of the list
people.push("Maria");

//Get a middleindex fom the array
let middleIndex: number = Math.floor(people.length / 2);

//adding a new guest at the middle index
people.splice(middleIndex, 0 , "Uzma");

console.log("Updated list of our Guests")
console.log(people)

// //sending messege for invitation to our guest one by one 
// people.forEach(newGuests => console.log(`Salam ${newGuests} would You like to Dinner with me`));

//print messege for inform guest about only 2 guest is invited
console.log("Unfortunately the new dinner Table won't arrive on Time so I can Invite only two Guests")

//remove guest from the list through while-loop one by one,until 2 names is remaining
while(people.length > 2){
    let remove_guest = people.pop()
    console.log(`Sorry, ${remove_guest} I can't invite you to dinner`)
}
//sending the invitation to the last 2 guests
console.log("Invitation of Last 2 Guests")
people.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to dinner`))

//remove last 2 guest 
people.pop()
people.pop()
//print empty list
console.log("Empty List:", people)