import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="">
               
                <div className="footerpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footercontainer">
                                    <div className="footer-title">About us</div>
                                    <div className="footer-text">My Newdawn College is a school with a passion of giving a broad and quality educational program to students without any discrimination</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="footercontainer">
                                <div className="footer-title">Quicklinks</div>
                                <div className="footer-text">
                                    <ul>
                                        <li><NavLink to="/about" className="footer-nav">About us</NavLink> </li>
                                        <li><NavLink to="/about/vission_mission" className="footer-nav">Vision | Mission</NavLink> </li>
                                        <li><NavLink to="/admission" className="footer-nav">Admission</NavLink> </li>
                                        <li><NavLink to="/about/faqs" className="footer-nav">Faqs</NavLink> </li>
                                    </ul>
                                </div>
                                </div> 
                            </div>
                            <div className="col-lg-3  col-md-6 col-sm-12">
                                <div className="footercontainer" style={{paddingRight:"20px"}}>
                                    <div className="footer-title">Contact Info</div>
                                    <div className="footer-text footer-textcontactinfo">
                                        10, Adepegba street, Behind Wema Bank, Abule-egba Lagos.
                                    </div>
                                    <div className="footer-text footer-textcontactinfo">
                                        1 & 2 Ajoke Oke Street, Old Shekina Building, Off Adepegba Str, Abule-egba, Lagos
                                    </div>
                                    <div className="footer-text footer-textcontactinfo">
                                        <span>Tel : </span>08029748772, 08055372675
                                    </div>
                                    <div className="footer-text footer-textcontactinfo">
                                        <span>Email: </span><br /><a href="mailto:mynewdawncollege@gmail.com" target="_blank"  rel="noopener noreferrer">mynewdawncollege@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footercontainer">
                                    <div className="footer-title">Connect with us</div>
                                    <div className="footer-text">
                                        <ul>
                                            <li><a href="https://web.facebook.com/Newdawn-Schools-101637609139261/?ref=pages_you_manage"className="social-icon footer-nav">Facebook</a></li>
                                            <li><a href="https://www.instagram.com/newdawncollege/"className="social-icon footer-nav">Instagram</a></li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-policy">
                    <div className="container">
                        <div className="footer-policy-text">
                            <p>My-New Dawn College Educational Services Limited. Copyright © 2021 All Rights Reserved.</p>
                            <p>Site Developed by <span><a href="https://abratemmy.github.io/myportfolio">Hayteetech</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
