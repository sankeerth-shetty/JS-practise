import React from "react";
import { useState } from "react";

function Name() {
  const [name, setName] = useState('Shanky');

  function changeName(){
    console.log("You have clicked function");
    setName("Sankeerth");
  }

  return (
    <div>
        <div>Hello, {name}</div>
        <button onClick={changeName}> click me </button>
    </div>
  );
}

export default Name;
