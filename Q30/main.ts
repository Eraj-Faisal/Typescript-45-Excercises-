//making an array of user names.

let userNames = ["Zeeshan", "Hamdan", "Saad", "Admin", "Usman"]

userNames.forEach(oneUser => {
    if(oneUser == "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneUser}, Thankyou for logging in Again.`)
    }
})