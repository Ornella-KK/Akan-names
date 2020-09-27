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
            
            break;
    
        default:
            break;
    }
        
        break;

    default:
        break;
}