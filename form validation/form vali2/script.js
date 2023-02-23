// for form 1

function button(result) {
    let emails = document.getElementById('email1').value;
    let password = document.getElementById('password1').value;
    if(emails == ""){
        document.getElementById('emailHelp').innerHTML = "<b>please enter your email</b>";
        document.getElementById('emailHelp').style.color = "red";
        document.getElementById('email1').style.borderWidth = "2px";
        document.getElementById('email1').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('email1').style.borderColor = "red";
    }
    
    if(password == ""){
        document.getElementById('password-error').innerHTML = "<b>please enter your password</b>";
        document.getElementById('password-error').style.color = "red";
        document.getElementById('password1').style.borderWidth = "2px";
        document.getElementById('password1').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('password1').style.borderColor = "red";
    }

    if(emails.match('@') && emails.match('.com') && password.length >= 7){
        document.getElementById('form1').onsubmit = "return true;";
    }

}

function keypressemail(ids, res){
    if(ids.value.match('@') && ids.value.match('.com')){
        document.getElementById(res).innerHTML = "<b>Thank you for trusting us</b>";
        document.getElementById(res).style.color = "green";
        document.getElementById('email1').style.borderWidth = "2px";
        document.getElementById('email1').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('email1').style.borderColor = "green";
    }
    else{
        document.getElementById(res).innerHTML = "<b>please enter your email with @ (e.g.: xyz@xyz.com)</b>";
        document.getElementById(res).style.color = "red";
        document.getElementById('email1').style.borderWidth = "2px";
        document.getElementById('email1').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('email1').style.borderColor = "red";
    }
}

function keypresspass(ids, res){
    if(ids.value.length >= 7){
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('password1').style.borderWidth = "2px";
        document.getElementById('password1').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('password1').style.borderColor = "green";
    }
    else{
        document.getElementById('password-error').innerHTML = "<b>password must be greater than 8</b>";
        document.getElementById('password-error').style.color = "red";
        document.getElementById('password1').style.borderWidth = "2px";
        document.getElementById('password1').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('password1').style.borderColor = "red";
    }
}



// for form 2

function sub(res){
    let finame = document.getElementById('fname').value;
    let femail = document.getElementById('inputEmail').value;
    let fpass = document.getElementById('inputPassword').value;
    let fcpass = document.getElementById('inputCPassword').value;
    let faddress = document.getElementById('inputAddress').value;
    let fcity = document.getElementById('inputCity').value;
    let fzip = document.getElementById('inputZip').value;
    let fstate = document.getElementById('inputState').value;
    if(finame == ""){
        document.getElementById('eFname').innerHTML = "<b>please enter your name</b>";
        document.getElementById('eFname').style.color = "red";
        document.getElementById('fname').style.borderWidth = "2px";
        document.getElementById('fname').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('fname').style.borderColor = "red";
    }

    if(femail == ""){
        document.getElementById('eFemail').innerHTML = "<b>please enter your email</b>";
        document.getElementById('eFemail').style.color = "red";
        document.getElementById('inputEmail').style.borderWidth = "2px";
        document.getElementById('inputEmail').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputEmail').style.borderColor = "red";
    }
    
    if(fpass == ""){
        document.getElementById('eFpass').innerHTML = "<b>please enter your password</b>";
        document.getElementById('eFpass').style.color = "red";
        document.getElementById('inputPassword').style.borderWidth = "2px";
        document.getElementById('inputPassword').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputPassword').style.borderColor = "red";
    }

    if(fcpass == ""){
        document.getElementById('eFcpass').innerHTML = "<b>please enter your confirm password</b>";
        document.getElementById('eFcpass').style.color = "red";
        document.getElementById('inputCPassword').style.borderWidth = "2px";
        document.getElementById('inputCPassword').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputCPassword').style.borderColor = "red";
    }

    if(faddress == ""){
        document.getElementById('eFaddress').innerHTML = "<b>please enter your address</b>";
        document.getElementById('eFaddress').style.color = "red";
        document.getElementById('inputAddress').style.borderWidth = "2px";
        document.getElementById('inputAddress').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputAddress').style.borderColor = "red";
    }else{
        document.getElementById('eFaddress').innerHTML = "";
        document.getElementById('eFaddress').style.color = "green";
        document.getElementById('inputAddress').style.borderWidth = "2px";
        document.getElementById('inputAddress').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputAddress').style.borderColor = "green";
    }

    if(fcity == ""){
        document.getElementById('eFcity').innerHTML = "<b>please enter your city</b>";
        document.getElementById('eFcity').style.color = "red";
        document.getElementById('inputCity').style.borderWidth = "2px";
        document.getElementById('inputCity').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputCity').style.borderColor = "red";
    }

    if(fzip == ""){
        document.getElementById('eFpin').innerHTML = "<b>please enter your pin</b>";
        document.getElementById('eFpin').style.color = "red";
        document.getElementById('inputZip').style.borderWidth = "2px";
        document.getElementById('inputZip').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputZip').style.borderColor = "red";
    }

    if(fstate == ""){
        document.getElementById('eFstate').innerHTML = "<b>please select your state</b>";
        document.getElementById('eFstate').style.color = "red";
        document.getElementById('inputState').style.borderWidth = "2px";
        document.getElementById('inputState').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputState').style.borderColor = "red";
    }

    if(isNaN(finame) && femail.match('@') && femail.match('.com') 
       && fpass.length >= 7 && fpass.match('@') && fpass.match('&') 
       && fcpass === fpass && faddress != "" && isNaN(fcity) && !isNaN(fzip) && fstate != ""){
        document.getElementById('form2').onsubmit = "return true;"
    }

}

function festate(ins, res){
    if(ins.value == "Gujarat" || ins.value == "Maharashtra" || ins.value == "Rajasthan"){
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('inputState').style.borderWidth = "2px";
        document.getElementById('inputState').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputState').style.borderColor = "green";
    }
}

function YourAddress(ins, res){
    if(ins.value == ""){
        document.getElementById(res).innerHTML = "<b>please enter your address</b>";
        document.getElementById(res).style.color = "red";
        document.getElementById('inputAddress').style.borderWidth = "2px";
        document.getElementById('inputAddress').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputAddress').style.borderColor = "red";
    }else{
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('inputAddress').style.borderWidth = "2px";
        document.getElementById('inputAddress').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputAddress').style.borderColor = "green";
    }
}

function keypressfname(ins, res){
    if(!isNaN(ins.value)){
        document.getElementById(res).innerHTML = `<b>please enter your name with characters (numeric value not allowed)</b>`;
        document.getElementById(res).style.color = "red";
        document.getElementById('fname').style.borderWidth = "2px";
        document.getElementById('fname').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('fname').style.borderColor = "red";
    }
    else{
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('fname').style.borderWidth = "2px";
        document.getElementById('fname').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('fname').style.borderColor = "green";
    }
}

function keypressfcity(inp, rep){
    if(!isNaN(inp.value)){
        document.getElementById(rep).innerHTML = `<b>please enter your city name with characters (numeric value not allowed)</b>`;
        document.getElementById(rep).style.color = "red";
        document.getElementById('inputCity').style.borderWidth = "2px";
        document.getElementById('inputCity').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputCity').style.borderColor = "red";
    }
    else{
        document.getElementById(rep).innerHTML = "";
        document.getElementById(rep).style.color = "green";
        document.getElementById('inputCity').style.borderWidth = "2px";
        document.getElementById('inputCity').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputCity').style.borderColor = "green";
    }
}

function keypressfemail(ins, res){
    if(ins.value.match('@') && ins.value.match('.com')){
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('inputEmail').style.borderWidth = "2px";
        document.getElementById('inputEmail').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputEmail').style.borderColor = "green";
    }
    else{
        document.getElementById(res).innerHTML = "<b>please enter your email with @ (e.g.: xyz@xyz.com)</b>";
        document.getElementById(res).style.color = "red";
        document.getElementById('inputEmail').style.borderWidth = "2px";
        document.getElementById('inputEmail').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputEmail').style.borderColor = "red";
    }
}

function keypressfpass(ins, res){
    if(ins.value.length >= 7 && ins.value.match('@') && ins.value.match('&')){
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('inputPassword').style.borderWidth = "2px";
        document.getElementById('inputPassword').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputPassword').style.borderColor = "green";
    }
    else{
        document.getElementById(res).innerHTML = "<b>password must be more than 8 and must conatain @ and & characters</b>";
        document.getElementById(res).style.color = "red";
        document.getElementById('inputPassword').style.borderWidth = "2px";
        document.getElementById('inputPassword').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputPassword').style.borderColor = "red";
    }
}

function keypressfcpass(inc, req){
    let pass = document.getElementById('inputPassword');
    if(inc.value === pass.value){
        document.getElementById(req).innerHTML = "";
        document.getElementById(req).style.color = "green";
        document.getElementById('inputCPassword').style.borderWidth = "2px";
        document.getElementById('inputCPassword').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputCPassword').style.borderColor = "green";
    }
    else{
        document.getElementById(req).innerHTML = "<b>password does not match</b>";
        document.getElementById(req).style.color = "red";
        document.getElementById('inputCPassword').style.borderWidth = "2px";
        document.getElementById('inputCPassword').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputCPassword').style.borderColor = "red";
    }
}

function keypressfpin(ins, res){
    if(isNaN(ins.value)){
        document.getElementById(res).innerHTML = "<b>pin should be in numeric</b>";
        document.getElementById(res).style.color = "red";
        document.getElementById('inputZip').style.borderWidth = "2px";
        document.getElementById('inputZip').style.boxShadow = "0px 0px 4px 2px red";
        document.getElementById('inputZip').style.borderColor = "red";
    }
    else{
        document.getElementById(res).innerHTML = "";
        document.getElementById(res).style.color = "green";
        document.getElementById('inputZip').style.borderWidth = "2px";
        document.getElementById('inputZip').style.boxShadow = "0px 0px 4px 2px green";
        document.getElementById('inputZip').style.borderColor = "green";
    }
}


