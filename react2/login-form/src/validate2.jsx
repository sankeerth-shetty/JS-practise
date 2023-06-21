import React from "react";
import { useState } from "react";
import Form from "./login";

function Validate() {
    const [emails, setEmail] = useState('');
    const [passwords, setPassword] = useState('');

    function myEmail(event) {
        setEmail(event.target.value);
    }

    function myPassword(event) {
        setPassword(event.target.value);
    }

    function submit1() {
        var mname = document.getElementById('name').value;
        document.getElementById('semail').textContent = document.getElementById('email1').value;
        document.getElementById('spass').textContent = document.getElementById('password1').value;
        var memail = document.getElementById('semail').textContent;
        var mpass = document.getElementById('spass').textContent;
        alert('registered successfully');
        console.log(mname);
        console.log(memail);
        console.log(mpass);
    }

    function submit() {
        var memail = document.getElementById('semail').textContent;
        var mpass = document.getElementById('spass').textContent;
        class User {
            login(memail, mpass) {
                if (memail === emails && mpass === passwords) {
                    window.open('website.html', '_self')
                }
                else {
                    document.getElementById('email').style.borderColor = "red";
                    document.getElementById('password').style.borderColor = "red";
                    document.getElementById('error').textContent = "Incorrect email or password";
                    document.getElementById('error').style.color = "red";
                }
            }
        }

        const user = new User();
        user.login(memail, mpass)

        // console.log(memail);
    }

    return (
        <>
            <Form email={myEmail} password={myPassword} submit={submit} submit1={submit1} />
        </>
    )
}

export default Validate;