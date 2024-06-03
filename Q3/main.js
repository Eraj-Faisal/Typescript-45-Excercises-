var personName = "eraj Fatima";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (value) { return value.toUpperCase(); }));
