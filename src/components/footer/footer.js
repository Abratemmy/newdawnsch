import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="">
                {/* <div className="">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-9"></div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="">
                                <div className="footer-design">
                                    Enroll your child
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footerpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footercontainer">
                                    <div className="footer-title">About us</div>
                                    <div className="footer-text">Travel through the Island of Nigeria in a private cruise</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="footercontainer">
                                <div className="footer-title">Quicklinks</div>
                                <div className="footer-text">
                                    <ul>
                                        <li><NavLink to="/career" className="footer-nav">Carreer</NavLink> </li>
                                        <li><NavLink to="/application_form" className="footer-nav">Application form</NavLink> </li>
                                        <li><NavLink to="/vision_mission" className="footer-nav">Vision | Mission</NavLink> </li>
                                        <li><NavLink to="/pay_fees" className="footer-nav">Pay Fees</NavLink> </li>
                                        <li><NavLink to="/curriculum" className="footer-nav">Our Curriculum</NavLink> </li>
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
                                        <span>Email: </span><br /> mynewdawncollege@mynewdawn.org.ng
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footercontainer">
                                    <div className="footer-title">Connect with us</div>
                                    <div className="footer-text">
                                        <ul>
                                            <li><a href=""className="social-icon" className="footer-nav">Facebook</a></li>
                                            <li><a href=""className="social-icon" className="footer-nav">Twitter</a></li>
                                            <li><a href=""className="social-icon" className="footer-nav">Instagram</a></li>
                                            <li><a href=""className="social-icon" className="footer-nav">Youtube</a></li>
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
