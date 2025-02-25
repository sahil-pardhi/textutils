import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App /> {/*Render the App component. After rendering bring this content inside const root = ReactDOM.createRoot(document.getElementById('root')); */}
  </React.StrictMode>
);
// entry point

reportWebVitals();
