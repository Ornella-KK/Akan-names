function getInput(){
    var inputCentury=parseInt(document.getElementById("century").value);
    var inputMonth=parseInt(document.getElementById("month").value);
    var inputDate=parseInt(document.getElementById("date").value);
    var inputYear=parseInt(document.getElementById("Year").value);
    if(inputMonth>12 || inputMonth==0){
        alert("Invalid Month");
        return false;
    }else if(inputDate>31 || inputDate==0){
        alert("Inalid Date");
        return false;
    }
}
function calculateDay(){
    getInput();
    dayOfTheWeek=((((inputCentury/4)-2*inputCentury-1)+(5*inputYear/4)+((26*(inputMonth+1)/10)+inputDate)%7)-1);
    console.log(dayOfTheWeek);   
    if(dayOfTheWeek<0){
        return ((Math.floor(dayOfTheWeek))*-1);
    }
    else if(dayOfTheWeek>0){
        return (Math.floor(dayOfTheWeek));
    }
    else{
        return dayOfTheWeek;
    }
}
function myFunction(){
    day= calculateDay;
    checkGender();
    console.log("Thefunction is running");
}
function checkGender(){
    var gen= document.getElementById("gender");
    if(gen[1].checked==true){
        var gender="female";
    }else if(gen[2].checked==true){
        var gender="male";
    }else{
        console.log("pass");
    }
switch (gender) {
    case gender:"male"
    switch (day) {
        case 0|| -0:
            document.getElementById("result").innerHTML="You were born on Sunday, "+"your Akan name is KWASI"
        break;
        case 1 || -1:
            document.getElementById("result").innerHTML="You were born on Monday, "+"your Akan name is KWADWO"
        break;
        case 2 || -2:
            document.getElementById("result").innerHTML="You were born on Tuesday, "+"your Akan name is KWABENA"
        break;
        case 3 || -3:
            document.getElementById("result").innerHTML="You were born on Wednesday, "+"your Akan name is KWAKU"
        break;
        case 4 || -4:
            document.getElementById("result").innerHTML="You were born on Thursday, "+"your Akan name is YAW"
        break;
        case 5 || -5:
            document.getElementById("result").innerHTML="You were born on Friday, "+"your Akan name is KOFI"
        break;
        case 6 || -6:
            document.getElementById("result").innerHTML="You were born on Saturday, "+"your Akan name is KWAME"
        break;
        default:
    }
    break;
    case gender:"female"
        switch (day) {
            case 0 || -0:
                document.getElementById("result").innerHTML="You were born on Sunday, "+"your Akan name is AKOSUA"
            break;
            case 1 || -1:
                document.getElementById("result").innerHTML="You were born on Monday, "+"your Akan name is ADWOA"
            break;
            case 2 || -2:
                document.getElementById("result").innerHTML="You were born on Tuesday, "+"your Akan name is ABENAA"
            break;
            case 3 || -3:
                document.getElementById("result").innerHTML="You were born on Wednesday, "+"your Akan name is AKUA"
            break;
            case 4 || -4:
                document.getElementById("result").innerHTML="You were born on Thursday, "+"your Akan name is YAA"
            break;
            case 5 || -5:
                document.getElementById("result").innerHTML="You were born on Friday, "+"your Akan name is AFUA"
            break;
            case 6 || -6:
                document.getElementById("result").innerHTML="You were born Saturday, "+"your Akan name is AMA"
            break;

        }
    break;
    default:
        console.log("pass");
}
}