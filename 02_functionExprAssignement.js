".............1.squar of Number................"

var squar = function(num){
    var result = num*num;
    console.log("squar of", num,"is", result);
    
}
squar(5);
squar(6);
squar(25);
squar(100);

"..................typeof......................."
var squar = function(num){
    var result = num*num;
    //console.log("squar of", num,"is", result);
    console.log("typeof squar is" ,typeof result);
    
}
squar();

"....................swap of two arg using function expression............"

function swapValues(value1,value2){
    console.log("Befor log",value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After log",value1,value2);
}
swapValues("toufik","khatik");

"........................string............................"
console.log("============length of total characters============");

var char = "JS the most popular language";
console.log(char.length);
console.log("===========index of character with charAt(0,0)============");
var char = "JS the most popular language";
console.log("charater at 7",char.charAt(6));
var char = "JS the most popular language";
console.log("charater at 11",char.charAt(11));//space is at 11 postion so not showing any value

console.log("=================last chatater using length property=================");
var chare = "JS the most popular language";
console.log(chare.charAt(char.length-1));

console.log("=================first chatater using length property=================");
var chare = "JS the most popular language";
console.log(chare.charAt(char.length-28));
console.log(char.length);

console.log("============squar of total length===========");
var length = 28;
var num = length*length;
console.log(num);