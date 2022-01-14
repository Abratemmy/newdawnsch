import React, { Component } from 'react'
import Otherpage from '../../components/otherpage/Otherpage';
import './contact.css';
import { FaHome, FaEnvelope, FaPhone,  FaInstagram, FaFacebookF } from 'react-icons/fa';
import Form from './Form';

export class Contact extends Component {
    render() {
        return (
            <div className="Contactpage">
                <Otherpage title="Contact" subtitle="contact" />
                <div className="contactpage-container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-address container">
                                <div className="container">
                                    <div className="contact-title">Contact Information</div>
                                    <div className="contact-text">Contact us with the following information below</div>
                                    <div className="row contact-row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <FaHome className="contact-icon" />
                                        </div>
                                        {/* <div className="col-lg-1 col-md-1 col-sm-1"></div> */}
                                        <div className="col-lg-10 col-md-10 col-sm-10">
                                            <div className="contact-details">
                                                <span>10, Adepegba street, Behind Wema Bank, Abule-egba Lagos.</span>
                                                <span>1 & 2 Ajoke Oke Street, Old Shekina Building, Off Adepegba Str, Abule-egba, Lagos</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row contact-row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <FaEnvelope className="contact-icon" />
                                        </div>
                                        {/* <div className="col-lg-1 col-md-1 col-sm-1"></div> */}
                                        <div className="col-lg-10 col-md-10 col-sm-10">
                                            <div className="contact-details">
                                                <span>mynewdawncollege@mynewdawn.org.ng</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row contact-row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <FaPhone className="contact-icon" />
                                        </div>
                                        {/* <div className="col-lg-1 col-md-1 col-sm-1"></div> */}
                                        <div className="col-lg-10 col-md-10 col-sm-10">
                                            <div className="contact-details">
                                                <span> 08029748772, 08055372675</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-social-icon">
                                        Contact us Via: <span><FaFacebookF className="social-icon social-icon1" /></span>
                                        <span><FaInstagram className="social-icon social-icon2" /></span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-form">
                                <Form />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}

export default Contact
