import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Router from './components/Router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';


function App() {

  return (
    <div className="App">
      {/* <NewNavbar /> */}

      <Router />
      <Footer />
    </div>
  );
}

export default App;
