import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
    <ScrollToTop />
    <App />
  </Router>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );