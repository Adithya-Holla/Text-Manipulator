import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Textbox from './Components/Textbox';
import DarkMode from './Components/DarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Textbox value="Lowercase to Uppercase"/>
    <DarkMode/>
  </React.StrictMode>
);
