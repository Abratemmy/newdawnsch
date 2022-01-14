import React, {useState} from 'react';
import "./Newnavbar.css";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import logo from '../../images/newdawnlogo.jpeg';
import { Link, NavLink } from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";

function NewNavbar() {
    const [navbar, setNavbar] = useState(false);
    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    const [dropclick, setDropclick] = useState(false);
    const handleDropClick = () =>setDropclick(!dropclick)

    const changeBackground= ()=>{
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=130){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    return (
        <div className="newnavbar-container">
            <div className="top-navbar">
                <div className="container">
                    <div className="newnav-top">
                        <div className="text"></div>
                        <div className="number">
                            <FaPhoneAlt className="react-icon" /><span>08029748772, 08055372675 </span>
                            <span className="navtop-email"><MdEmail className="react-icon" /><span>mynewdawncollege@mynewdawn.org.ng</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={navbar ? "navbar active":"navbar"}>
                <div className="container nav-container">
                    <div className="nav-logo">
                        <img src={logo} alt="NEWDAWNSCHOOL" width="130%" height="100" />
                    </div>

                    <div className="navigation">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/newdawnsch" exact   className="nav-links"onClick={handleClick}>Home</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink to="/about" exact  className="nav-links " onClick={handleDropClick}>About</NavLink>
                                <div className="dropdown-content nav-item2">
                                    <ul className={dropclick ? "height":"no-height"}>
                                        <li><NavLink to="/about"exact className="dropdown-nav"onClick={handleClick}>About</NavLink></li>
                                        <li><NavLink to="/about/vission_mission" className="dropdown-nav"onClick={handleClick}>Vision & mission</NavLink></li>
                                        <li><NavLink to="/about/school_song" className="dropdown-nav"onClick={handleClick}>School song</NavLink></li>
                                        <li><NavLink to="/about/staffs" className="dropdown-nav"onClick={handleClick}>Our Teacher</NavLink></li>
                                        <li><NavLink to="/about/faqs" className="dropdown-nav"onClick={handleClick}>Faqs</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admission" exact  className="nav-links">Admission</NavLink>
                                <div className="dropdown-content nav-item2">
                                    <ul>
                                        <li><NavLink to="/admission"className="dropdown-nav" onClick={handleClick}>Admission Procedure</NavLink></li>
                                        <li><NavLink to="/tuition" className="dropdown-nav" onClick={handleClick}>Tuition</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gallery"   className="nav-links"onClick={handleClick}>Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/newsupdate"  className="nav-links"onClick={handleClick}>News & Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact"  className="nav-links"onClick={handleClick}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-icon" onClick={handleClick}>
                        {click === true ? <div> 
                            <span className=""  onClick={handleClick} > <FiXCircle />   </span>
                            </div> : <div> 
                                <span className=""  onClick={handleClick} > <FiAlignRight />   </span>
                            </div>
                        }
                    </div>
                </div>

               
            </div>

            
            
        </div>
    )
}

export default NewNavbar
