class EmployeePay { 
    get id() { return this._id; }
    set id(Id){
        try {
            var pattern = new RegExp("[0-9]*[1-9][0-9]");
            if (pattern.test(name)) {
    
                this._id = Id;
            } else {
                throw ("Enter a Valid ID");
            }
        } catch (error) {
            console.error(error);
        }
    }
    get name() { return this._name; }
    set name(name){
        try {
            var pattern = new RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
            if (pattern.test(name)) {
    
               this._name = name;
            } else {
                throw ("Name format is incorrect");
            }
        } catch (error) {
            console.error(error);
        }
    }
    set salary(Salaray){
        try {
            var pattern2 = new RegExp("^[0-9]*[1-9][0-9]*$");
            if (pattern2.test(Salaray)) {
    
               this._salary =Salaray;
            } else {
                throw ("Name format is incorrect");
            }
        } catch (error) {
            console.error(error);
        }
    }
    get salary() { return this._salary; }
    get gender() { return this._gender;}
    set gender(gender) {try {
        var patternn = new RegExp("^(?:m|M|male|Male|f|F|female|Female)$")
        if (patternn.test(gender)) {
    
            this._gender = gender;
        } else {
            throw ("Enter a Valid Gender:");
        }
    } catch (error) {
        console.error(error);
    } this._gender = gender;}
    get startDate() {return this._startDate;}
    set startDate(startDate) {this._startDate = startDate;}
        toString() {
            return `id: ${this._id}\nName : ${this._name}\nSalary: ${this._salary}\nGender: ${this.gender}\nStartDate: ${this.startDate}`;   
         }}
    let Data=new EmployeePay();
    Data._id = 23;
    Data._salary = 45000
    Data.gender = "Female"
    Data.startDate = "26jan"
    Data.name = "gharat"///console.log("\n\n")
    console.log(Data);
    console.log(Data.toString());
    
