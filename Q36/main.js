//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// making a function
function make_shirt(size, message) {
    console.log("You Selected ".concat(size, " size Shirt with the text ").concat(message, " Prints on Your Shirt."));
}
//calling our function.
make_shirt("Medium", "LOVE");
