class EmployeePay {
    constructor(id,name,salary){
        this._id=id;
        this._name=name;
        this._salary=salary;
    }
get id() { return this._id; }
get name() { return this._name; }
get salary() { return this._salary; }
set id(Id){this._id = Id;}
set name(Name){this._name = Name;}
set salary(Salaray){this._salary = Salaray;}

toString(){
 return "id=" + this.id + " , name =" +this._name +", salary ="+this._salary;
}
}
let Data=new EmployeePay(8,"prat",40000);
console.log(Data.toString());
Data.name = "Gharat";
Data.id= 7;
console.log(Data.toString());
