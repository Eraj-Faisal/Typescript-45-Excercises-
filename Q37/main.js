//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// making a function
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Pakistan"; }
    console.log("Creating a ".concat(size, " Shirt with the Text ").concat(message, " Prints on Shirt"));
}
//calling a function with by default message and large size
make_shirt();
// calling a function for the medium shirt with by default message.
make_shirt("Medium");
//calling a function for small size and also different message.
make_shirt("Small", "I Love Karachi");
