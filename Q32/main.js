var currentUsers = ["ali", "Rizwan", "Adeel", "Waqas", "riaz"];
var newUsers = ["Ayesha", "Maria", "Ali", "Riaz", "Hamza"];
//running loop for checking user names are already axist or not.
newUsers.forEach(function (new_one_user) {
    // making a condition for checking usernames already exist or not and save this condition in the variable.
    var our_condition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is Available"));
    }
});
