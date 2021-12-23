import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nosifer+Caps" />
    <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Exo+2" rel="stylesheet" />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
