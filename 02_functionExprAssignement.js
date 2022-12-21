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

var char="total char"
