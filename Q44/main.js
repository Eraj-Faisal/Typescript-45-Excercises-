//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//make a function with a rest parameter that accepts more than one arguments
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nIngredients of the Sandwich :\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow Enjoy Sandwich");
}
// calling our function 3 times with different no. of arguments
make_sandwich("Cucumber", "Lettuce", "Kabab", "Chatni");
make_sandwich("Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Peanut Butter");
