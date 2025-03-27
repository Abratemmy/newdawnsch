import React, { Component } from 'react';
import './footer.css'

export class Footer extends Component {
    render() {
        const today = new Date();
        const year = today.getFullYear();
        return (
            <div className="">

                <div className="footerpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footercontainer">
                                    <div className="footer-title">About us</div>
                                    <div className="footer-text">My Newdawn is dedicated to empowering students at every stage of their educational journey. Whether you are pursuing a college degree or looking to advance your career through our continuing education programs, we provide the resources, guidance, and support you need to achieve your goals.</div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footercontainer" style={{ paddingRight: "20px" }}>
                                    <div className="footer-title">Contact Info</div>
                                    <div className="footer-text footer-textcontactinfo">
                                        10, Adepegba street, Behind Wema Bank, Abule-egba Lagos.
                                    </div>
                                    <div className="footer-text footer-textcontactinfo">
                                        1 & 2 Ajoke Oke Street, Old Shekina Building, Off Adepegba Str, Abule-egba, Lagos
                                    </div>

                                    <div className="footer-text footer-textcontactinfo">
                                        ORYZ MALL, 25, Iwofe Road , off Ada-George, by Pepperoni, opposite First bank. Port Harcourt, Rivers State.
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footercontainer">
                                    <div className="footer-title">Connect with us</div>
                                    <div className="footer-text">
                                        <ul>
                                            <li><a href="https://web.facebook.com/Newdawn-Schools-101637609139261/?ref=pages_you_manage" className="social-icon footer-nav">Facebook</a></li>
                                            <li><a href="https://www.instagram.com/newdawncollege/" className="social-icon footer-nav">Instagram</a></li>

                                        </ul>
                                        <div className="footer-text footer-textcontactinfo">
                                            <span>Tel : </span>+2348029748772, +2348055372675
                                        </div>
                                        <div className="footer-text footer-textcontactinfo">
                                            <span>Email: </span><br /><a href="mailto:mynewdawncollege@gmail.com" target="_blank" rel="noopener noreferrer">mynewdawncollege@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-policy">
                    <div className="container">
                        <div className="footer-policy-text">
                            <p>My-New Dawn College & continuing Educational Limited. Copyright © {year} All Rights Reserved.</p>
                            <p>Site Developed by <span><a href="https://temitopeolasode.netlify.app/">Hayteetech</a></span></p>
                            {/* <p>Site Developed by <span><a href="https://abratemmy.github.io/myportfolio">Hayteetech</a></span></p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
