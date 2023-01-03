class Vehical{
    constructor( company,model,drive,color,engine,)
{
    this.company = company;
    this.model = model;
    this.drive = drive;
    this.color = color;
    this.engine = engine;
}
}
let vehicalone = new Vehical("tata",1245,"4 wheel","red","turbo");
let Vehicaltwo = new Vehical("Ford","cruser","4wheel","blue","turbo");
let Vehicalthree = new Vehical("toyota","inova","4wheel","silver","vs6");
let Vehicalfour = new Vehical("Jagwar","car","4wheel","red","turbo");
let Vehicalfive = new Vehical("farare","car","4wheel","white"," superturbo");

console.log(vehicalone);
console.log(Vehicaltwo);
console.log(Vehicalthree);
console.log(Vehicalfour);
console.log(Vehicalfive);

console.log("=============================class college==========================================");

class College{
   
    constructor (collegename,address,branch){
    this.collegename = collegename;
    this.address = address;
    this.branch = branch
}
details(){
    console.log(this.collegename,this.address,this.branch);
}
}
let engineering = new College("severs","pandharpur","computer");
let poly = new College("coep","pune","mech");
let phrma = new College("svit","shelve","agri");
let polyfarma = new College("severs","pandharpur","agri");
engineering.details();
poly.details();
phrma.details();
polyfarma.details();

console.log("==================================traverse object=====================================");

//function College(){
    //for (const key in poly) {
        //if (Object.hasOwnProperty.call(poly, key)) {
           // const element = poly[key];
            
      //  }
   // }
//}console.log(College);