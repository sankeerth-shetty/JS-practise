import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Name from './name';
import Boolean from './boolean';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Name />
    <Boolean />
  </React.StrictMode>
);

