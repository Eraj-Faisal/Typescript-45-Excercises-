//making an array of user names.
var userNames = ["Zeeshan", "Hamdan", "Saad", "Admin", "Usman"];
userNames.forEach(function (oneUser) {
    if (oneUser == "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thankyou for logging in Again."));
    }
});
