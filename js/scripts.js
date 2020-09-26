function getInput(){
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
function 