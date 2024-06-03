let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//using for loop
for(let oneNum of numbers){
    let ordinalEnd : string

    if(oneNum === 1){
        ordinalEnd = "st"
    }
    else if(oneNum === 2){
        ordinalEnd = "nd"
    }
    else if(oneNum === 3)
        ordinalEnd = "rd"
    else{
        ordinalEnd = "th"
    }
    console.log(`${oneNum}${ordinalEnd}`)
}