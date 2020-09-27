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
