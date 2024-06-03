var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making the array of countries and print its original order.
var countries = ["China", "Brazil", "Danmark", "Africa"];
console.log("Original Order:", countries);
//arrange the array on alphabetical order without modify the actual array.
console.log("Alphabetical Order:", __spreadArray([], countries, true).sort());
// print the array is still in its original order.
console.log("Still in Original Order:", countries);
// print the array in reverse order without modify the original order.
console.log("Reverse Order:", __spreadArray([], countries, true).reverse());
// print the array is still in its original order.
console.log("Still in Original Order:", countries);
// reverse the original array.
console.log("Reverse the Original Array:", countries.reverse());
// again reverse the array and convert it in its original order.
console.log("Back to Original Order:", countries.reverse());
// sort the original array and print.
console.log("Arrange in Alphabetic Order:", countries.sort());
// reverse the original array again .
console.log("Reverse the Original Array Again:", countries.reverse());
