//define a function to create a car object with optional options
function parts_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initilize a car object with manufacturer and model.
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add additonal options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
//call a function to create a car object
var my_car = parts_car("Toyota", "Corolla", "Automatic", "color:White");
//print the variable to check all the information is stored correctly in car object.
console.log(my_car);
