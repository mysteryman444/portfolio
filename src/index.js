import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, App, Project1, Project2, Project3, Project4, Footer } from './components';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <HashRouter basename='/'>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ladd_observatory" element={<Project1 />} />
      <Route path="/surviving_the_hot_100" element={<Project2 />} />
      <Route path="/bakery_simulator" element={<Project3 />} />
      <Route path="/apply_design" element={<Project4 />} />
    </Routes>
    <Footer/>
  </HashRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
