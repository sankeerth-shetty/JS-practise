import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './website/header';
import Body from './website/body';
import Footer from './website/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);

