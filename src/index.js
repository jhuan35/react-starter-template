import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import BrowserRouter from 'react-router-dom/BrowserRouter'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>,
   document.getElementById('root')
);