//41.Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// make a function.

function show_magician (magicians : string[]){
    magicians.forEach(name => console.log(name))
}
// make and aaray with magicians name
let magician_names = ["Habib", "Faisal", "Aman"]

// call our function to print one by one magicians name.
show_magician(magician_names)