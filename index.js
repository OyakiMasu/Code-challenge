//The function gradingSystem
const gradingSystem=function (){
    let marks = prompt('Write the marks between 0-100')
//The condition for not receiving numbers that are not between the range    
if(marks <0 && marks >100){
    console.log("This is not between 0-100")
}
//The condition for receiving the numbers that are in between the range
else if(marks >=0 && marks <=100){
   
    //The condition for receiving the grade A
        if(marks >= 80){
        grade = 'A'
        console.log('This is the grade you got ' + grade);
    //The condition for receiving the grade B      
       }else if(marks >= 60){
        grade = 'B'
        console.log('This is the grade you got ' + grade);
    //The condition for receiving the grade C    
       }else if(marks >= 50){
        grade = 'C'
        console.log('This is the grade you got ' + grade);
    //The condition for receiving the grade D    
       }else if(marks >= 40){
        grade = 'D'
        console.log('This is the grade you got ' + grade);
    //The condition for receiving the grade E
       }else {
        grade = 'E'
        console.log('This is the grade you got ' + grade);
       }
    //The condition for not receiving any other stuff except numbers between 0-100          
    } 
    else{
        console.log('This is not between 0-100')
    }
 
    }
    
    


gradingSystem()

