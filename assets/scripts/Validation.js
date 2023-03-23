function validateform (){

    // this is a single line comment

    /*
    this is 
    a multiline 
    comment
    */

    var errors ="";
    //alert ('Validate Function called successfullt');
    
    // this line is getting vallue of element and storing it in variable
    var FullName = document.getElementById('FullName').value;
    // check if FullName variable is empty 
    // 1 = setting value 2 = signs checks the value of something
    if(FullName==""){
       // alert("Please Enter Full Name");
        // block action from getting executed
        //return false;
        errors +="<li>Please Enter Full Name.</li>";
        document.getElementById('FullName').classList.add('InputError');
    }
    else{
        document.getElementById('FullName').classList.remove('InputError');
    }

    var UserName = document.getElementById('UserName').value;

    if(UserName==""){
        // alert("Please Enter Username");
        // return false;
        errors +="<li>Please Enter Username.</li>";
        document.getElementById('UserName').classList.add('InputError');
}
else{
    document.getElementById('UserName').classList.remove('InputError');
}
var Password = document.getElementById('Password').value;

if(Password==""){
    // alert("Please Enter Password");
    // return false;
    errors +="<li>Please Enter Password.</li>";
    document.getElementById('Password').classList.add('InputError');
}
else{
    document.getElementById('Password').classList.remove('InputError');
}
var Nationality = document.getElementById('Nationality').value;
if(Nationality=="0"){
    // alert("Please select Nationality.")
    // return false;
    errors +="<li>Please Select Nationality.</li>";
    document.getElementById('Nationality').classList.add('InputError');
}
else{
    document.getElementById('Nationality').classList.remove('InputError');
}

    if(errors!=""){
        document.getElementById('errorlist').innerHTML = errors;
        return false;
    }
    else{
        document.getElementById('errorlist').innerHTML = "";
        return true;
    }

    
}
function resetForm(){
        document.getElementById('errorlist').innerHTML = "";
        document.getElementById('FullName').classList.remove('InputError');
        document.getElementById('UserName').classList.remove('InputError');
        document.getElementById('Password').classList.remove('InputError');
        document.getElementById('Nationality').classList.remove('InputError');
    }