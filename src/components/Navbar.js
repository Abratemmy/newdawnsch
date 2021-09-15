import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import './Navbar.css';
import logo from '../images/newdawnlogo.jpeg';

function Navbar() {
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

    const [navbar, setNavbar] = useState(false);

    const[drop, setDrop] = useState(false);
    const handleDrop = () =>setDrop(!drop)

    const[dropacademy, setDropAcademy] = useState(false);
    const handleDropAcademy = () =>setDropAcademy(!dropacademy)

    const [career, setCareer] = useState(false);
    const handleCareer = () =>setCareer(!career)
    return (
        <>
            <div className={navbar ? "navbar active":"navbar"}>
                <div className="container nav-container">
                    <div className="nav-logo">
                        <img src={logo} alt="NEWDAWNSCHOOL" width="130%" height="100" />
                    </div>

                    <div className="navigation">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/" exact  className="nav-links"onClick={handleClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="drop-plus">
                                    <NavLink to="/about" exact className="nav-links nav-dropdown" onClick={handleDrop}>
                                        <span>About</span>
                                        <span className="plus">+</span>
                                    </NavLink>
                                    
                                </div>
                                <ul className="hover-dropdown">
                                    <li><NavLink to="/about"exact  className="nav-links"onClick={handleClick}>About us</NavLink></li>
                                    <li><NavLink to="/history"exact  className="nav-links"onClick={handleClick}>History</NavLink></li>
                                    <li><NavLink to="/vision_mission"exact className="nav-links"onClick={handleClick}>Vision | Mission</NavLink></li>
                                    <li><NavLink to="/school_head" exact className="nav-links"onClick={handleClick}>Head of School</NavLink></li>
                                    <li><NavLink to="/school_song" exact className="nav-links"onClick={handleClick}>School song & prayer</NavLink></li>
                                    <li><NavLink to="/our_staffs"exact  className="nav-links"onClick={handleClick}>Our staffs</NavLink></li>
                                </ul>
                                <div className={drop ? "sub-item active" : "sub-item"}>
                                    <ul>
                                        <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>About us</NavLink></li>
                                        <li><NavLink to="history"exact activeClassName="active" className="nav-links"onClick={handleClick}>History</NavLink></li>
                                        <li><NavLink to="vision_mission"exact activeClassName="active" className="nav-links"onClick={handleClick}>Vision | Mission</NavLink></li>
                                        <li><NavLink to="school_head"exact activeClassName="active" className="nav-links"onClick={handleClick}>Head of School</NavLink></li>
                                        <li><NavLink to="school_song"exact activeClassName="active" className="nav-links"onClick={handleClick}>School song & prayer</NavLink></li>
                                        <li><NavLink to="our_staffs"exact activeClassName="active" className="nav-links"onClick={handleClick}>Our staffs</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="drop-plus">
                                    <a href="#" exact activeClassName="active" className="nav-links nav-dropdown" onClick={handleDropAcademy}>
                                        <span>Admission </span>
                                        <span className="plus">+</span>
                                    </a>
                                </div>
                                <ul className="hover-dropdown">
                                        <li><NavLink to="/admission_procedure"exact activeClassName="active" className="nav-links"onClick={handleClick}>Admission Procedure</NavLink></li>
                                        <li><NavLink to="/application_form"exact activeClassName="active" className="nav-links"onClick={handleClick}>Application Form</NavLink></li>
                                        <li><NavLink to="/our-curriculum"exact activeClassName="active" className="nav-links"onClick={handleClick}>Our Curriculum</NavLink></li>
                                    </ul>
                                <div className={dropacademy ? "sub-item active" : "sub-item"}>
                                    <ul>
                                        <li><NavLink to="/admission_procedure"exact activeClassName="active" className="nav-links"onClick={handleClick}>Admission Procedure</NavLink></li>
                                        <li><NavLink to="/application_form"exact activeClassName="active" className="nav-links"onClick={handleClick}>Application Form</NavLink></li>
                                        <li><NavLink to="/our-curriculum"exact activeClassName="active" className="nav-links"onClick={handleClick}>Our Curriculum</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/approach" exact activeClassName="active" className="nav-links"onClick={handleClick}>Approach</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="drop-plus">
                                    <a href="#" exact activeClassName="active" className="nav-links nav-dropdown" onClick={handleCareer}>
                                        <span>Career</span>
                                        <span className="plus">+</span>
                                    </a>
                                </div>
                                <ul className="hover-dropdown" >
                                    <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>Why choose NewDawn School</NavLink></li>
                                    <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>Why teach at NewDawn</NavLink></li>
                                    <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>Professional Development</NavLink></li>
                                </ul>
                                <div className={career ? "sub-item active" : "sub-item"}>
                                    <ul>
                                        <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>Why choose NewDawn School</NavLink></li>
                                        <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>Why teach at NewDawn</NavLink></li>
                                        <li><NavLink to="about"exact activeClassName="active" className="nav-links"onClick={handleClick}>Professional Development</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/payment" exact activeClassName="active" className="nav-links" onClick={handleClick}>Pay Fees</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" exact activeClassName="active" className="nav-links" onClick={handleClick}>Contact us</NavLink>
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
        </>
    )
  
}

export default Navbar
