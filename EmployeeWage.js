console.log("Welcome to Employee Wage Computation Program");
    const FULL_DAY_WAGE = 20;
    const FULL_DAY_WORKING_HOURS = 8;
    const PART_TIME_WORKING_HOURS = 4;  
    const  MAX_WORKING_HOURS = 160;
    const MAX_WORKING_DYAS =20;
    let totalWorkingDays =0;
    let totalWorkingHours =0;
    let totalWage=0;
    let daily_Wage = 0;
    let Daily_Wagee = [];
    let StoreMap = new Map();


    function attendence() {
        for (totalWorkingDays = 1; totalWorkingDays <= MAX_WORKING_DYAS && totalWorkingHours <= MAX_WORKING_HOURS ;  totalWorkingDays++) {
        let employee_Attendence = Math.floor(Math.random() * 3);
    
        switch (employee_Attendence) {
            case 0:
               let Full_Time_Wage = FULL_DAY_WAGE * FULL_DAY_WORKING_HOURS ;
               totalWage += Full_Time_Wage;
                
            console.log("Employee is Present \t Daily Wage = " + FULL_DAY_WAGE * FULL_DAY_WORKING_HOURS);
                totalWorkingHours += FULL_DAY_WORKING_HOURS;
               Daily_Wagee.push(FULL_DAY_WAGE*FULL_DAY_WORKING_HOURS);
               StoreMap.set("Day" +totalWorkingDays, {Full_Time_Wage , });
               break;
            case 1:
                let Part_Time_Wagee = FULL_DAY_WAGE * PART_TIME_WORKING_HOURS ;
               totalWage +=  Part_Time_Wagee;
            console.log("Employee is Present Part Time \t Daily Wage = " + FULL_DAY_WAGE * PART_TIME_WORKING_HOURS);
                totalWorkingHours += FULL_DAY_WORKING_HOURS;
              Daily_Wagee.push(FULL_DAY_WAGE*PART_TIME_WORKING_HOURS);
              StoreMap.set("Day" +totalWorkingDays, {Part_Time_Wagee , });
              break;
            case 2:
                let dailyy_Wage = FULL_DAY_WAGE * 0 ;
                totalWage += dailyy_Wage;
                console.log("Employee is Absent \t Daily Wage = 0");
                Daily_Wagee.push(FULL_DAY_WAGE*0);
                StoreMap.set("Day" +totalWorkingDays, {dailyy_Wage , });
                break;
           }
       }
    }
attendence();
console.log("Total Working Days = " + totalWorkingDays );
console.log("Total Working Hours = " +  totalWorkingHours);
console.log(Daily_Wagee);
console.log(StoreMap);
//B) Day Along with DailyWage by using Array map.
Daily_Wagee.map((element, index)=>  {
    console.log("Day: ", index + 1);
    console.log("Daily Wage : " , element);

}  )

// A) Total Wage Using Array For Each
let empDay = [];
let arrayTotalWage=0;
empDay.forEach((Daily_Wagee) =>{
  totalWage+= arrayTotalWage;
})
console.log(totalWage);
///C) Day when full time Wage 160 by using Filter.
let temp = Daily_Wagee.filter((element) => element ==160);
console.log("Full Day Using filter: ", temp);

