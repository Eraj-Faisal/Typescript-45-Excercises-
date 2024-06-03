var pizzas = ["Tikka", "Fajita", "B.B.Q"];
//using for loop
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var onePizza = pizzas_1[_i];
    console.log("I Like ".concat(onePizza, " Pizza"));
}
//print the messege outside of the for-loop
console.log("I really Love Pizza");
