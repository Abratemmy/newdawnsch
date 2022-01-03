import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar';
import Router from './components/Router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NewNavbar from './components/newnavbar/NewNavbar';


function App() {
  return (
    <div className="App">
      <NewNavbar />
      {/* <Navbar /> */}
        <Router />
      <Footer />
    </div>
  );
}

export default App;
