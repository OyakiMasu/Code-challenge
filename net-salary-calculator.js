const prompt = require(`prompt-sync`)();
const pay = parseInt (prompt ("Fill in the salary:"))
const benefits = parseInt (prompt("Please enter benefits:"))

//Payee Calculator
function calPayeTax(){

    if(pay >=0 && pay <= 24000){
        console.log (`Tax:`, pay*0.1)

     }else if (pay >=24001 && pay <= 32333){
        console.log(`Tax`, pay*2.5)

     }else{
        console.log(`Tax`, pay*0.3)

     }
}
console.log(calPayeTax())


