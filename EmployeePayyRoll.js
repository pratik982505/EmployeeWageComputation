class EmployeePay {
    constructor(id,name,salary,gender, startDate){
        this._id=id;
        this._name=name;
        this._salary=salary;
        this.gender = gender;
        this.startDate = startDate;
    }
    uu = {
get id() { return this._id; },
set id(Id){this._id = Id;},
get name() { return this._name; },
set name(Name){this._name = Name;},
get salary() { return this._salary; },
set salary(Salaray){this._salary = Salaray;},
get gender() { return this._gender;},
set gender(gender) { this._gender = gender;},
get startDate() {return this.startDate;},
set startDate(startDate) {this._startDate = this.startDate;}
    }
    toString() {
        return `id: ${this._id}\nName : ${this._name}\nSalary: ${this._salary}\nGender: ${this.gender}\nStartDate: ${this.startDate}`;
    }
}
let Data=new EmployeePay(8,"prat",40000,"Male","27jan");
console.log(Data.toString)
Data._id = 21;
Data._name = "Gharat"
Data._salary = 45000
Data.gender = "Female"
Data.startDate = "26jan"
console.log("\n\n")
console.log(Data.toString());
