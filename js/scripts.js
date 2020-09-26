function getInput({
    var inputMonth=parseInt(document.grtElementById("month").value);
    var inputDate= parseInt(document.getElementById("date").value);
    var inputYear=parseInt(document.getElementById("year").value);
 if(inputMonth>12 || inputMonth==0){
     alert("Invalid year");
     return false;
 }else if(inputDate>31 || inputMonth==0){
     alert("Invalid month")
     return false;
 }
}
