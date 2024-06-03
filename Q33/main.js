var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNum = numbers_1[_i];
    var ordinalEnd = void 0;
    if (oneNum === 1) {
        ordinalEnd = "st";
    }
    else if (oneNum === 2) {
        ordinalEnd = "nd";
    }
    else if (oneNum === 3)
        ordinalEnd = "rd";
    else {
        ordinalEnd = "th";
    }
    console.log("".concat(oneNum).concat(ordinalEnd));
}
