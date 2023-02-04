var bankDetails = function(bankName,accontNumber,location,pincode,opened){
var fullName = bankName;
var number = accontNumber;
var address = location;
var pin = pincode;
var openClosed = opened;
console.log("Bank Name:-",fullName,"Account Number:-",number,"Location:-",address,"Pincode:-",pin,openClosed);

}
bankDetails("SBI",47892673,"sangola",413307,"");
bankDetails("City Bank",3436782345,"pune",431202,"");
bankDetails("Axis Bank",7856782345,"Mumbai",441202,"");
bankDetails("HDFC Bank",7956782345,"pune",631202,"open");
