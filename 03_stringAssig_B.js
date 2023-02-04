var givenString = "       Hey you are doing good, Keep it up";

console.log("1) Given String is:-",givenString);

console.log("2) Length of String:-",givenString.length);

console.log("3) After remoing extra space:-",givenString.trim());

// var givenString = "Hey you are doing good, Keep it up";
// var result = givenString.split('')
// var spaceCount = result.length-1;
// console.log(spaceCount);

//console.log("4) Total count of removed spaces:-",givenString.split(givenString)); not understand

console.log("5) print first and last charactre on same line after trim:-",givenString.charAt(0));// not correct

console.log("7) Index of word good:-",givenString.indexOf("good"));

console.log("8) substring starting from index 22:-",givenString.substring(22));
console.log("8) slice starting from index 22:-",givenString.slice(22));

console.log("9) is string ending with up:-",givenString.endsWith("up"));//chek correct or not

console.log("8) is string started with Hey:-",givenString.startsWith("Hey"));