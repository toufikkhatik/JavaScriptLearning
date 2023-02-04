console.log("A) Class is created");
class Bank {
    constructor(bank_name,location,account_no,ifsc,interest_rate) {

this.bank_name=bank_name;
this.location=location;
this.account_no=account_no;
this.ifsc=ifsc
this.interest_rate=interest_rate;

}
}
let bankone=new Bank("axis_bank","pune","45567890123","AXIS2010","10%");
let banktwo=new Bank("sbi_bank","sangola","45567890123","AXIS2010","6%");
let bankthree=new Bank("icici_bank","mumbai","45567890123","AXIS2010","11%");
let bankfour=new Bank("kotak_bank","kolhapur","45567890123","AXIS2010","12%");
let bankfive=new Bank("hdfc_bank","solapur","45567890123","AXIS2010","13%");
let banksix=new Bank("panjab_bank","pandharpur","45567890123","AXIS2010","11%");
console.log(bankone,);
console.log(banktwo);
console.log(bankthree);
console.log(bankfour);
console.log(bankfive);
console.log(banksix);

const bankData = [bankone,banktwo,bankthree,bankfour,bankfive];
for (const element of bankData) {
  if(element.bank_name == "kotak bank");
 
  console.log(`${element.bank_name},${element.location},${element.account_no},${element.ifsc},${element.interest_rate}`);  
}

