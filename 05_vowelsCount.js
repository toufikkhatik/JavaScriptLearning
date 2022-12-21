// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);
