//function Expression
var showResult = function show(){
    console.log("show...");

}
showResult();
var myName = "Mohit";
console.log(myName);

// Function Expression
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);

var squar = function(num){
console.log("Squar of", num,num*num);
}
squar(5)