class Employes{
    constructor(name,id,age,city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    }
}
let empSmit = new Employes("smith",33,26,"delhi");
let empJay = new Employes("Jay",300,21,"pune");
let empBill = new Employes("Billgates",5000,58,"USA");
console.log(empSmit);
console.log(empJay);
console.log(empBill);
