import React from "react";
import { useState } from "react";

function Numbers(){
    const [steps, setSteps] = useState(0);

    function increment(){
        // setSteps(steps + 1);
        // setSteps(steps + 1);

        setSteps((prevState) => prevState + 1);
        setSteps((prevState) => prevState + 1);
    }

    function decrement(){
        return setSteps(steps - 1);
    }

    return (
        <div>
            <button onClick={increment}> + </button>
            <div>{steps}</div>
            <button onClick={decrement}> - </button>
        </div>
    );
}

export default Numbers;