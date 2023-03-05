function checkSalary(){
    const hours = Number (prompt("How many hours do you work per day"));
    const salaryRate= Number(prompt("how much is hourly rate?"));

    if (hours>0 && hours<= 7) {
        console.log("Your salary is " + (hours * salaryRate) + " euros!");
    }
    else if (hours>7 && hours<=9){
        console.log("Your salary is " + ((7 * salaryRate) + ((hours-7)*(salaryRate*1.5)) + " euros!"));
    
    }
    
    else if (hours>9 && hours<=24){
        console.log("Your salary is " + ((7 * salaryRate) + (2*(salaryRate*1.5)) + ((hours-9)*(salaryRate*2)) + " euros!"));
    }
    
    else {
        console.log('error')
    }
    }
    
    
    checkSalary();