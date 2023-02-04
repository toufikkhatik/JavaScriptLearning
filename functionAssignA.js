var show = function (){
console.log("Function with no argument and no return type1");
}
show();

var noMessage = function(){
console.log("Function with no argument and no return type2");
}
noMessage();

console.log("===============Function with argument and no return type========================");

var personalDetails = function(firstName,lastName,collegeName){
var name = firstName;
console.log(name);
var name2 = lastName;
console.log(name2);
var name3 = collegeName;
console.log(name3);
  
}
personalDetails("Toufik","khatik","SEVERI`s college of Engineering Pandharpur");

console.log("===================function with two argument and swap values==================");

var swapValue = function(value1,value2){
    console.log("Befor swap",value1,value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log("after swap value",value1,value2);
}
swapValue("virat","anuska");
swapValue(1000,2000);

console.log("=====================functin with three arugments for addition========================");

var addThreeValue = function(value1,value2,value3){
var addition = value1+value2+value3;
console.log(addition);
}
addThreeValue(10.23,600,40);
addThreeValue("Hellow","Good","Morning");