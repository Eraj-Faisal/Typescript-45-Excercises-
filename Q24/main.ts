let vegetable = "vegetable"
let uppercaseVegetable = "VEGETABLE"
let Ten = 10
let Twenty = 20
let Vegetables = ["Potato", "Cabbage", "Onion", "Carrot"]
// Test for equality and inequality with strings

console.log("Is vegetable is equal to vegetable?")
console.log(vegetable == "vegetable")

console.log("\nIs vegetable is notEqual to vegetable")
console.log(vegetable != "vegetable")

//Test using the lowercase Function
console.log("\nIs VEGETABLE is equal to vegetable after converting to lowercase?")
console.log(uppercaseVegetable.toLowerCase() == "vegetable")

console.log("\nIs VEGETABLE is notEqual to vegetable after converting to lowercase?")
console.log(uppercaseVegetable.toLowerCase() != "vegetable")

//Numerical Tests
console.log("\nIs Ten is Equal to Twenty?")
console.log(Ten == Twenty)

console.log("\nIs Ten is notEqual to Twenty?")
console.log(Ten != Twenty)

//Greater than & Lessthan
console.log("\nIs Twenty is Greater than Ten?")
console.log(Twenty > Ten)

console.log("\nIs Twenty is Lessthan Ten?")
console.log(Twenty < Ten)

//greater than or equal to ..
console.log("\nIs Twenty is Greater than or Equal to Ten?")
console.log(Twenty >= Ten)

//Less than or equal to ..
console.log("\nIs Twenty is Lessthan or Equal to Ten?")
console.log(Twenty <= Ten)

//Test using "and" & "or" Operators
console.log("\nTen is not Equal to Twenty and Ten is Less Than Twenty")
console.log(Ten != 20 && Ten < 20)

console.log("\nTen is not Equal to Twenty and Ten is Greater Than Twenty")
console.log(Ten != 20 && Ten > 20)

// using (OR) ||
console.log("\n20 is less than 10 OR 20 is Greater Than 10")
console.log(20 < 10 || 20 > 10)

console.log("\n20 is less than 10 OR 20 is NotEqual to 20")
console.log(20 < 10 || 20 != 20)

//Test for checking the items on an array, whether included in array or not.
console.log("\nIs Cabbage is Include in my Vegetable Array")
console.log(Vegetables.includes("Cabbage"))

//Not Include
console.log("\nIs Cabbage is Not Include in my Vegetable Array")
console.log(!Vegetables.includes("Cabbage"))
