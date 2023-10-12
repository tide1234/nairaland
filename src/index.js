import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App  from "./App"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "aos/dist/aos.css"
import "aos/dist/aos.js"
import AOS from "aos"
import 'quill/dist/quill.snow.css';


AOS.init(
  {duration:3000,}
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <BigText text="hello world 1" color = "red"/>
 <BigText text="hello world 2" color = "yellow"/>
 <BigText text="hello world 3" color ="green"/>
 <BigText text="hello world 4" color = "blue"/> */}
 <App title={"homepage"}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
