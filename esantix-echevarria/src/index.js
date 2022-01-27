import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';

import './index.css';
import "./styles/navbar.scss"
import "./styles/list.scss"
import "./styles/web.scss"

const firebaseConfig = {
  apiKey: "AIzaSyB-DrSxrASOXTf6pwq04-4owcGOsYRR9JY",
  authDomain: "coderhouse-react-a1c70.firebaseapp.com",
  projectId: "coderhouse-react-a1c70",
  storageBucket: "coderhouse-react-a1c70.appspot.com",
  messagingSenderId: "671622167476",
  appId: "1:671622167476:web:e5d69697c5384ad5a450e1",
  measurementId: "G-1935HZGJWR"
};



initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
