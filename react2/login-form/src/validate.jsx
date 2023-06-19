import React from "react";
import { useState } from "react";
import Form from "./login";

function Validate(){
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    let emails1 = "shetty.sankeerth@gmail.com";
    let passwords1 = "sh12345";

    function myEmail(event){
        setEmail(event.target.value);
    }

    function myPassword(event){
        setPassword(event.target.value);
    }

    function submit(){
        if(emails1 === email && passwords1 === password){
            window.open('website.html', '_self')
        }
        else{
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('password').style.borderColor = "red";
            document.getElementById('error').textContent = "Incorrect email or password";
            document.getElementById('error').style.color = "red";
        }
    }

    return(
        <>
            <Form email={myEmail} password={myPassword} submit={submit} />
        </>
    )
}

export default Validate;