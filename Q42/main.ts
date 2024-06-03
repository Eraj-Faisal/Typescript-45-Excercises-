// define the function.

function show_magicians (magicians :string []){
    magicians.forEach(name => console.log(name))
}
// make a function for adding "the great" through map 
function make_great (magicians : string[]){
    return magicians.map(name => `The Great ${name}`)
}
//define an array for magicians name
let magician_names = ["Faisal", "Habib", "Aman"]

//call Great function to modify the magicians name and save this in another variable.
let great_magicians = make_great(magician_names)

show_magicians(great_magicians)