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
function validate(form){
    var gMale=form.gender_male.value;
    var gFemale=form.gender_female.value;
    if(gMale.checked==false && gFemale.checked==false){
        alert("You must select male or female");
        return false;
    }
}
function calculateTheDay(){
    getInput();
    dayOfTheWeek=((((inputCentury/4)-2*inputCentury-1)+((5*inputYear/4))+((26*(inputMonth+1)/10))+inputDate)%7)-1;
    console.log(dayOfTheWeek);
    return((Math.floor(dayOfTheWeek)).toExponential(2));
}
