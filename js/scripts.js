function getInput(){
    var inputCentury=parseInt(document.getElementById("century");
    var inputMonth=parseInt(document.getElementById("month").value);
    var inputDate= parseInt(document.getElementById("date").value);
    var inputYear=parseInt(document.getElementById("year");
 if(inputMonth>12 || inputMonth==0){
     alert("Invalid month");
     return false;
 }else if(inputDate>31 || inputMonth==0){
     alert("Invalid date")
     return false;
 }
}
function checkGender(){
    var gen = document.getElementById("gender");
    if(gen[1].checked==true){
        var gender= "female";
    }else if(gen[2].checked==true){
        var gender= "male";
    }else{
        console.log("pass");
    }
}
function calculateTheDay(){
    getInput();
    dayOfTheWeek=((((inputCentury/4)-2*inputCentury-1)+((5*inputYear/4))+((26*(inputMonth+1)/10))+inputDate)%7)-1;
    console.log(dayOfTheWeek);
    return((Math.floor(dayOfTheWeek)).toExponential(2));
}
function myFunction(){
    day= calculateTheDay();
    checkGender();
    console.log("running");
}
var daysOfTheWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
switch (gender) {
    case gender: "male"
    switch (day) {
        case 0 || -0:
            document.getElementById("result").innerHTML="You were born on Sunday, "+" your Akan Name is KWASI."
        break;
        case 1 || -1:
            document.getElementById("result").innerHTML="You were born on Monday, "+" your Akan Name is KWADWO."
        break;
        case 2 || -2:
            document.getElementById("result").innerHTML="You were born on Tuesday, "+" your Akan Name is KWABENA"
        break;
        case 3 || -3:
            document.getElementById("result").innerHTML="You were born on Wednesday, "+"your Akan Name is KWAKU."
        break;
        case 4 || -4:
            document.getElementById("result").innerHTML="You were born on Thursday "+"your Akan Name is YAW."   
        break;
        case 5 || -5:
            document.getElementById("result").innerHTML="You were born on Friday "+"your Akan Name is KOFI."
        break;
        case 6 || -6:
            document.getElementById("result").innerHTML="You were born on Saturday "+"your Akan Name is KWAME."            
        break;
        default:
            
    }
        
        break;
     
    default:
        break;
}