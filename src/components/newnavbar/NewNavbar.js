import React, { useState } from 'react';
import "./Newnavbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import Popup from './popup.js';

function NewNavbar() {
    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const [dropclick, setDropclick] = useState(false);
    const handleDropClick = () => setDropclick(!dropclick)

    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className="newnavbar-container">
            <div className="top-navbar">
                <div className="container">
                    <div className="newnav-top">
                        <div className="text"></div>
                        <div className="number">
                            <FaPhoneAlt className="react-icon" /><span>08029748772, 08055372675 </span>
                            <span className="navtop-email">
                                <a href="mailto:mynewdawncollege@gmail.com" target="_blank" rel="noopener noreferrer" ><MdEmail className="react-icon" /><span>mynewdawncollege@gmail.com</span></a>
                            </span>
                        </div>
                    </div>

                </div>
                <button className="nav-main-btn" onClick={() => setButtonPopup(true)}>
                    <div className="nav-btn-nav">Pay Fees</div>
                </button>

                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My-New Dawn Account Details</h3>

                    <div className="popup-account" style={{ paddingTop: "20px" }}>Account Name : <span> MY NEWDAWN EDUCATIONAL CONSULT</span></div>
                    <div className="popup-account">Account Number : <span>0083458557</span></div>
                    <div className="popup-account">Bank Name : <span> STERLING BANK</span></div>

                    <hr />

                    <div className="popup-account" style={{ paddingTop: "20px" }}>Account Name : <span>MY NEWDAWN EDUCATIONAL CONSULT. ACCT</span></div>
                    <div className="popup-account">Account Number : <span>0019028331</span></div>
                    <div className="popup-account">Bank Name : <span>Guarantee Trust Bank(GTb)</span></div>

                    <hr />

                    <div className="popup-account" style={{ paddingTop: "20px" }}>Account Name : <span>MY NEWDAWN EDUCATIONAL CONSULT. ACCT</span></div>
                    <div className="popup-account">Account Number : <span>0243324811</span></div>
                    <div className="popup-account">Bank Name : <span>Wema Bank </span></div>

                </Popup>
            </div>

            <div className={navbar ? "navbar active" : "navbar"}>
                <div className="container nav-container">
                    <div className="nav-logo">
                        <NavLink to="/college" exact ><img src="https://res.cloudinary.com/hayteetech/image/upload/v1645891711/Mynewdawnschool/newdawnlogo_adqqj9.jpg" alt="NEWDAWNSCHOOL" width="130%" height="100" /></NavLink>
                    </div>

                    <div className="navigation">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-links" onClick={handleClick}>Home</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink to="/college/about" exact className="nav-links " onClick={handleDropClick}>About</NavLink>
                                <div className="dropdown-content nav-item2">
                                    <ul className={dropclick ? "height" : "no-height"}>
                                        <li><NavLink to="/college/about" exact className="dropdown-nav" onClick={handleClick}>About</NavLink></li>
                                        <li><NavLink to="/college/about/vission_mission" className="dropdown-nav" onClick={handleClick}>Vision & mission</NavLink></li>
                                        <li><NavLink to="/college/about/school_song" className="dropdown-nav" onClick={handleClick}>School song</NavLink></li>
                                        <li><NavLink to="/college/about/director" className="dropdown-nav" onClick={handleClick}>Our Director</NavLink></li>
                                        <li><NavLink to="/college/about/faqs" className="dropdown-nav" onClick={handleClick}>Faqs</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/college/admission" exact className="nav-links">Admission</NavLink>
                                <div className="dropdown-content nav-item2">
                                    <ul>
                                        <li><NavLink to="/college/admission" className="dropdown-nav" onClick={handleClick}>Admission Procedure</NavLink></li>
                                        <li><NavLink to="/college/tuition" className="dropdown-nav" onClick={handleClick}>Tuition</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/college/gallery" className="nav-links" onClick={handleClick}>Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/college/newsupdate" className="nav-links" onClick={handleClick}>News & Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/college/contact" className="nav-links" onClick={handleClick}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-icon" onClick={handleClick}>
                        {click === true ? <div>
                            <span className="" onClick={handleClick} > <FiXCircle />   </span>
                        </div> : <div>
                            <span className="" onClick={handleClick} > <FiAlignRight />   </span>
                        </div>
                        }
                    </div>
                </div>


            </div>



        </div>
    )
}

export default NewNavbar
