import React from "react";
import { useState } from "react";

function Boolean(){
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);

    function changeName(){
        setName('Sankeerth')
        setFlag(!flag);
    }

    return (
        <div>
            <div>Hello, {flag ? name : ""}</div>
            <button onClick={changeName}> click me </button>
        </div>
    );
}

export default Boolean;