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

// making copy of the original array through slice.

let copy_magician_names =  magician_names.slice()

//modify our copied array to add "The Great" before magicians name

let copy_great_magicians = make_great(copy_magician_names)

//show both arrays .

//original array
console.log("Original Array\n")
show_magicians(magician_names)

//copied array
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians)