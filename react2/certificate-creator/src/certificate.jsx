import React from "react";
import Forms from "./forms";
import certi from "./certi.module.css";
import { useState } from "react";

function Certificate() {
    const [firstName, setFName] = useState(' ');
    const [lastName, setLName] = useState(' ');
    const [courseName, setCName] = useState(' ');
    // console.log(inputName);

    function firstsName(event) {
        setFName(event.target.value);
    }
    function lastsName(event) {
        setLName(event.target.value);
    }
    function coursesName(event) {
        setCName(event.target.value);
    }

    return (
        <div>
            <div id={certi.border}>
                <p className={certi.head}>CERTIFICATE</p>
                <p className={certi.title}>of completion</p>
                <p className={certi.texts}>THIS IS TO CERTIFY THAT</p>
                <p className={certi.name}>{firstName} {lastName}</p>
                <p className={certi.course}>Has completed {courseName} course successfully</p>
            </div>
            <br />
            <Forms firstName={firstsName} lastName={lastsName} courseName={coursesName} />
        </div>
    )
}

export default Certificate;