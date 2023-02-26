function error(blur, mssg, ens){
    if(blur.value == ""){
        document.getElementById(mssg).innerHTML = "*Please enter your "+ens+"<br>";
        document.getElementById(mssg).style.color = "red";
        return false;
    }
    else{
        document.getElementById(mssg).innerHTML = "<br>";
    }
}

function check(names, errs){
    if(isNaN(names.value)){
        document.getElementById(errs).innerHTML = "<br>";
    }
    else{
        document.getElementById(errs).innerHTML = "*Please enter your name properly (no numeric)";
        document.getElementById(errs).style.color = "red";
        return false;
    }
}

function emails(email, errs){
    if(email.value.match('@')){
        document.getElementById(errs).innerHTML = "<br>";
    }
    else{
        document.getElementById(errs).innerHTML = "*Please enter proper email with @ ";
        document.getElementById(errs).style.color = "red";
        return false;
    }
}

function passwords1(pass, errs){
    if(pass.value.length >= 4){
        document.getElementById(errs).innerHTML = "<br>";
    }
    else{
        document.getElementById(errs).innerHTML = "*Password must have more than 4 characters";
        document.getElementById(errs).style.color = "red";
        return false;
    }


    if(pass.value.match('@') && pass.value.match('&')){
        document.getElementById(errs).innerHTML = "<br>";
    }
    else{
        document.getElementById(errs).innerHTML = "*Password must contain @ and & symbols";
        document.getElementById(errs).style.color = "red";
        return false;
    }
}

function error1(pass, errs){
    let p = document.getElementById('password').value;
    if(pass.value == p){
        document.getElementById(errs).innerHTML = "<br>";
    }
    else{
        document.getElementById(errs).innerHTML = "*Password does not match";
        document.getElementById(errs).style.color = "red";
        return false;
    }
}

function mobile1(names, errs){
    let m = document.getElementById('number').value;
    if(isNaN(m)){
        document.getElementById(errs).innerHTML = "*Please enter mobile number properly";
        document.getElementById(errs).style.color = "red";
    }
    else{
        document.getElementById(errs).innerHTML = "<br>";
    }
}

function check(names, errs){
    if(isNaN(names.value)){
        document.getElementById(errs).innerHTML = "<br>";
    }
    else{
        document.getElementById(errs).innerHTML = "*Please enter your name properly (no numeric)";
        document.getElementById(errs).style.color = "red";
        return false;
    }
}

function reset(){
    window.location.reset();
}

function display(click){
    // event.preventDefault();

    // return false;

    let a = document.getElementById('fname').value;
    let b = document.getElementById('lname').value;
    let c = document.getElementById('nname').value;
    let d = document.getElementById('email').value;
    let e = document.getElementById('password').value;
    let f = document.getElementById('repassword').value;
    let g = document.getElementById('date-of-birth').value;
    let h = document.getElementById('number').value;
    let i = document.getElementById('address').value;
    let j = document.getElementById('gender').value;
   
    console.log(`First Name: ${a}`);
    console.log(`Last Name: ${b}`);
    console.log(`Nick Name: ${c}`);
    console.log(`Email: ${d}`);
    console.log(`Password: ${e}`);
    console.log(`Confirm Password: ${f}`);
    console.log(`Date of birth: ${g}`);
    console.log(`Gender: ${j}`);
    console.log(`Mobile number: ${h}`);
    console.log(`Address: ${i}`);

    if(a == ""){
        document.getElementById('fname').style.borderColor = "red";
        document.getElementById('error-fname').innerHTML = "*Please enter your first name <br>";
        document.getElementById('error-fname').style.color = "red";
        return false;
    }
    
    if(b == ""){
        document.getElementById('lname').style.borderColor = "red";
        document.getElementById('error-lname').innerHTML = "*Please enter your last name <br>";
        document.getElementById('error-lname').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        return false;
    }
    
    if(c == ""){
        document.getElementById('nname').style.borderColor = "red";
        document.getElementById('error-nname').innerHTML = "*Please enter your nick name <br>";
        document.getElementById('error-nname').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        return false;
    }
    
    if(d == ""){
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('error-email').innerHTML = "*Please enter your email <br>";
        document.getElementById('error-email').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        return false;
    }
    
    if(e == ""){
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('error-password').innerHTML = "*Please enter your password <br>";
        document.getElementById('error-password').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        document.getElementById('email').style.borderColor = "black";
        return false;
    }
    
    if(f == ""){
        document.getElementById('repassword').style.borderColor = "red";
        document.getElementById('error-repassword').innerHTML = "*Please enter your confirm password <br>";
        document.getElementById('error-repassword').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        document.getElementById('email').style.borderColor = "black";
        document.getElementById('password').style.borderColor = "black";
        return false;
    }
    
    if(g == ""){
        document.getElementById('date-of-birth').style.borderColor = "red";
        document.getElementById('error-date').innerHTML = "*Please enter your date of birth<br>";
        document.getElementById('error-date').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        document.getElementById('email').style.borderColor = "black";
        document.getElementById('password').style.borderColor = "black";
        document.getElementById('repassword').style.borderColor = "black";
        return false;
    }
    
    if(h == ""){
        document.getElementById('number').style.borderColor = "red";
        document.getElementById('error-mobile').innerHTML = "*Please enter your mobile number<br>";
        document.getElementById('error-mobile').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        document.getElementById('email').style.borderColor = "black";
        document.getElementById('password').style.borderColor = "black";
        document.getElementById('repassword').style.borderColor = "black";
        document.getElementById('date-of-birth').style.borderColor = "black";
        return false;
    }
    
    if(i == ""){
        document.getElementById('address').style.borderColor = "red";
        document.getElementById('error-address').innerHTML = "*Please enter your address<br>";
        document.getElementById('error-address').style.color = "red";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        document.getElementById('email').style.borderColor = "black";
        document.getElementById('password').style.borderColor = "black";
        document.getElementById('repassword').style.borderColor = "black";
        document.getElementById('date-of-birth').style.borderColor = "black";
        document.getElementById('number').style.borderColor = "black";
        return false;
    }
    
    else{
        document.getElementById('form-data').onsubmit = "return true;";

        document.getElementById('fname').style.borderColor = "black";
        document.getElementById('lname').style.borderColor = "black";
        document.getElementById('nname').style.borderColor = "black";
        document.getElementById('email').style.borderColor = "black";
        document.getElementById('password').style.borderColor = "black";
        document.getElementById('repassword').style.borderColor = "black";
        document.getElementById('date-of-birth').style.borderColor = "black";
        document.getElementById('number').style.borderColor = "black";
        document.getElementById('address').style.borderColor = "black";


        alert(`Thank you ${a}, your form has been submitted successfully!`);
        alert(`Form information:
        First Name:  ${a}
        Last Name:  ${b}
        Nick Name:  ${c}
        Email:  ${d}
        Password:  ${e}
        Confirm Password:  ${f}
        Date of birth:  ${g}
        Gender: ${j}
        Mobile number:  ${h}
        Address:  ${i}`);
    }

    // else{
    //     document.getElementById('error-repassword').innerHTML = "<br>";
    //     return true;
    // }

}
