//making a array
var userNames = ["Zeeshan", "Hamdan", "Saad", "Admin", "Usman"];
// remove all values from array, now array is empty.
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty, We need to find some Users");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser == "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thankyou for logging in Again."));
        }
    });
}
