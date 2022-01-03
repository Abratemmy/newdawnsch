import React, {useState} from 'react';
import "./Newnavbar.css";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import logo from '../../images/newdawnlogo.jpeg';
import { NavLink } from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";

function NewNavbar() {
    const [navbar, setNavbar] = useState(false);
    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

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
                            <MdEmail className="react-icon" /><span>mynewdawncollege@mynewdawn.org.ng</span></div>
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
                                <NavLink to="/newdawnsch"   exact  className="nav-links"onClick={handleClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact  className="nav-links"onClick={handleClick}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admission" exact  className="nav-links"onClick={handleClick}>Admission</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/career"  exact  className="nav-links"onClick={handleClick}>Pay Fees</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/newsupdate"   exact  className="nav-links"onClick={handleClick}>News & Upadate</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" exact  className="nav-links"onClick={handleClick}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
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
    )
}

export default NewNavbar
