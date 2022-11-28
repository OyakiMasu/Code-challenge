//The prompt calls for each calculator
const prompt = require(`prompt-sync`)();
const pay = parseInt (prompt ("Fill in the salary:"))
const Benefits = parseInt (prompt("Please entter benefits:"))
//Payee Calculator
function calPayeTax(){

    if(pay >=0 && pay <= 24000){
        console.log (`Tax:`, pay*0.1)
         return pay*0.1
     }else if (pay >=24001 && pay <= 32333){
        console.log(`Tax`, pay*2.5)
        return pay*2.5
     }else{
        console.log(`Tax`, pay*0.3)
        return pay*0.3
     }
}
console.log(calPayeTax())



//NHIF calculator
const  NHIFDeductions = function(NHIFDeductions){
    if(pay >=0 && pay <=5999){
        console.log(`NHIFDeductions:`, 150)
        return 150
    }else if(pay >=6000 && pay <7999){
        console.log(`NHIFDeductions:`, 300)
        return 300
    }else if(pay >=8000 && pay <=11999){
        console.log(`NHIFDeductions:`, 400)
        return 400
    }else if(pay >=12000 && pay <=14999){
        console.log(`NHIFDeductions:`, 500)
        return 500
    }else if(pay >=15000 && pay <=19999){
        console.log(`NHIFDeductions:`, 600)
        return 600
    }else if(pay >=20000 && pay <=24999){
        console.log(`NHIFDeductions:`, 750)
        return 750
    }else if(pay >=25000 && pay <=29999){
        console.log(`NHIFDeductions:`, 850)
        return 850
    }else if(pay >=30000 && pay <=34999){
        console.log(`NHIFDeductions:`, 900)
        return 900
    }else if(pay >=35000 && pay <=39999){
        console.log(`NHIFDeductions:`, 950)
        return 950
    }else if(pay >=40000 && pay <=44999){
        console.log(`NHIFDeductions:`, 1000)
        return 1000
    }else if(pay >=45000 && pay <=49999){
        console.log(`NHIFDeductions:`, 1100)
        return 1100
    }else if(pay >=50000 && pay <=59999){
        console.log(`NHIFDeductions:`, 1200)
        return 1200
    }else if(pay >=60000 && pay <=69999){
        console.log(`NHIFDeductions:`, 1300)
        return 1300
    }else if(pay >=70000 && pay <=79999){
        console.log(`NHIFDeductions:`, 1400)
        return 1400
    }else if(pay >=80000 && pay <=89999){
        console.log(`NHIFDeductions:`, 1500)
        return 1500
    }else if(pay >=90000&& pay <=99999){
        console.log(`NHIFDeductions:`, 1600)
        return 1600
    }
    else{
        console.log(`NHIFDeductions`, 1700)
        return 1700
    }

}
//calling of the function onto the terminal
console.log(NHIFDeductions())


//NSSF calculator
const pensionablePay = function NSSFDeductions(){
   console.log(`NSSFDeductions`,pay * 0.06)
          return (pay*0.6)
}
console.log(NSSFDeduction())

function NetSalary(){
    console.log(`Net Salary:`, pay + (Benefits) - (NSSFDeductions))-(NHIFDeductions )
                return (pay + Benefits - (NHIFDeductions) - NSSFDeductions)
}
//Calling of the function onto the terminal
console.log(NetSalary());
