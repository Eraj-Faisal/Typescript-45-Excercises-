// define the function.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// make a function for adding "the great" through map 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array for magicians name
var magician_names = ["Faisal", "Habib", "Aman"];
// making copy of the original array through slice.
var copy_magician_names = magician_names.slice();
//modify our copied array to add "The Great" before magicians name
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays .
//original array
console.log("Original Array\n");
show_magicians(magician_names);
//copied array
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
