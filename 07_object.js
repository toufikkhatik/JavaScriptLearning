const person = {
height : 6,
weight : 70,
age : 23,
name : "Billgate"
}
console.log( typeof person);
console.log(person);

console.log(`Accessing object proerties using dot notation`);
const personAge = person.age
console.log(`Person age is: ${personAge}`);

console.log(`Accessing object proerties using bracket notation`);
const personName = person["name"];
console.log(`Person Name is: ${personName}`);

console.log(`Adding an property into an object`);
person.company = "Microsoft";
console.log(person);

console.log(`Updating an property into an object`);
person.age = 85;
console.log(person);

console.log(`==Deleting an property into an object==`);
delete person.weight;
console.log(person);



console.log(`========== in operator ================`);
let isAvailable = "height" in person;
if (isAvailable) {delete person.height;console.log(`"height" property is deleted successfully`);
}
 else{console.log(`"height" property not deleted as it is available inside object`);
}