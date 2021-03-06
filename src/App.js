import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Router from './components/Router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NewNavbar from './components/newnavbar/NewNavbar';
// import Popup from './components/newnavbar/popup';
import {createBrowserHistory} from 'history';

export const customHistory = createBrowserHistory(); 


function App() {
  // const[timedPopup, setTimedPopup] = useState(false)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setTimedPopup(true)
  //   }, 3000)
  // }, <Router />)


  return (
    <div className="App">
      <NewNavbar />
        {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h3>My-New Dawn Account Details new</h3>
        </Popup> */}
        <Router history={customHistory}/>
      <Footer />
    </div>
  );
}

export default App;
