class EmployeePay { 
get id() { return this._id; }
set id(Id){this._id = Id;}
get name() { return this._name; }
set name(name){
    try {
        var pattern = new RegExp("^[A-Z]{1}[a-zA-Z]{2,}")
        if (pattern.test(name)) {

           this._name = name;
        } else {
            throw ("Name format is incorrect");
        }
    } catch (error) {
        console.error(error);
    }
}
set salary(Salaray){this._salary = Salaray;}
get salary() { return this._salary; }
get gender() { return this._gender;}
set gender(gender) { this._gender = gender;}
get startDate() {return this._startDate;}
set startDate(startDate) {this._startDate = startDate;}
    toString() {
        return `id: ${this._id}\nName : ${this._name}\nSalary: ${this._salary}\nGender: ${this.gender}\nStartDate: ${this.startDate}`;   
     }}
let Data=new EmployeePay();
Data._id = 21;
Data._salary = 45000
Data.gender = "Female"
Data.startDate = "26jan"
Data.name = "gharat"///console.log("\n\n")
console.log(Data);
