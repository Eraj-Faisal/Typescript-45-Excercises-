let currentUsers = ["ali", "Rizwan", "Adeel", "Waqas", "riaz"]

let  newUsers = ["Ayesha", "Maria", "Ali", "Riaz", "Hamza"]

//running loop for checking user names are already axist or not.

newUsers.forEach(new_one_user =>{

    // making a condition for checking usernames already exist or not and save this condition in the variable.
    
    let our_condition = currentUsers.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`This Username ${new_one_user} is Available`)
    }
    }
)