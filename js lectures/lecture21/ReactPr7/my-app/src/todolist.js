import React from "react";
import { useState } from "react";
import './index.css'

function Todo() {
    const [name, setName] = useState('Shanky');
    const [names, setNames] = useState([]);

    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: names.length, name }]);
        setName(" ");
    }

    return (
        <div className="App">
            <form onSubmit={Todo}>
                <input type="text" placeholder="add names here" onChange={(e) => setName(e.target.value)}>
                </input>
                <button onClick={addNames}>Submit</button>
            </form>
            <hr /><hr />
            <div className="licenter">
                <ul>
                    {names.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;