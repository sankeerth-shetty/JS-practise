import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Name from './name';
import Boolean from './boolean';
import Numbers from './numbers';
import Todo from './todolist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='center'>
      <Name />
      <hr/>
      <Boolean />
      <hr/>
      <Numbers />
      <hr/>
      <Todo />
    </div>
  </React.StrictMode>
);

