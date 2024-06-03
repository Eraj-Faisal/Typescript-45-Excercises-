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
//call Great function to modify the magicians name and save this in another variable.
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
