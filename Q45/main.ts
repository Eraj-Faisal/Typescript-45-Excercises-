//define a function to create a car object with optional options

function parts_car (manufacturer, model, ...options){
    //Initilize a car object with manufacturer and model.
    let car = {
        manufacturer : manufacturer,
        model : model,   
    };
    // add additonal options to the car object
     options.forEach(option => {
        let [Key, value] = option.split(":");
        car [Key.trim()] = value.trim();         
    });
    return car;
}
//call a function to create a car object
let my_car = parts_car("Toyota", "Corolla", "Automatic", "color:White")

//print the variable to check all the information is stored correctly in car object.
console.log(my_car);