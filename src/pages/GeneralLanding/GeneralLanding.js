import React from 'react';
import './GeneralLanding.css';
import { NavLink } from 'react-router-dom';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import logo from '../../images/logo.png';
function GeneralLanding() {
    return (
        <div className="landingPage" style={{ position: 'relative' }}>
            {/* 
            http://preview.themeforest.net/item/education-educational-landing-page/full_screen_preview/36192710?_ga=2.57253674.1475293959.1742876491-1644680622.1722427069

            
            */}

            <div className='landingPage_content'>
                <div className='container'>
                    <div className='header'>
                        <div className="landingLogo">
                            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                        </div>

                        <div className="headerContact">
                            <div className="text">For Enquiry, Call us</div>
                            <div className='phone'>+2348029748772, +2348055372675</div>
                        </div>
                    </div>
                    <div className='bannerText'>
                        <div className='title'>We Lead a Professional Generation for the Future</div>
                        <div className='subtitle'>
                            My Newdawn is dedicated to empowering students at every stage of their educational journey. Whether you are pursuing a college degree or looking to advance your career through our continuing education programs, we provide the resources, guidance, and support you need to achieve your goals.
                        </div>
                    </div>
                    <div className='bannerBtn'>
                        <NavLink to="/college" className='buttonNav'>My Newdawn College</NavLink>
                        <NavLink to="/education_program" className='buttonNav buttonNav2'>Continuing Education Program</NavLink>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1742913998">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>


            {/* landingPage About */}

            <div className='landingPage_about'>
                <div className='container'>
                    <div className='title'>About Us</div>
                    <div className='subtitle'>The Result of All True Learning</div>

                    <div className='about_content'>
                        <div className='image'>
                            <img src={img2} alt="img2" className='img img1' />
                            <img src={img1} alt="img1" className='img img2' />
                        </div>

                        <div className="about_textContainer">
                            <div className='about_text'>
                                My Newdawn is committed to empowering students at every stage of their educational journey. Whether you’re pursuing a college degree or enhancing your skills through continuing education, we provide the guidance, resources, and support to help you succeed.
                            </div>
                            <div className='about_text'>
                                Our college programs offer quality education, expert instructors, and a nurturing learning environment to build a solid academic foundation. For professionals and lifelong learners, our continuing education courses help you develop new skills, earn certifications, and stay competitive in today’s evolving job market.
                            </div>
                            <div className='about_text'>
                                At My Newdawn, we believe education unlocks potential. With personalized learning plans, career-focused programs, and a strong commitment to student success, we help you achieve your goals and shape a brighter future. Let us be your partner in learning and growth!
                            </div>
                        </div>
                    </div>
                </div>

                <div className='WhatWeDo'>
                    <div className='container'>
                        <div className='title' style={{}}>What We Do</div>
                        <div className='contentDiv'>
                            <NavLink to="/college" className='buttonNav'>
                                <div className='card'>
                                    <div className='cardImage'>
                                        <img src={icon1} alt="" />
                                    </div>

                                    <div className='cardTitle'>My Newdawn College</div>
                                    <div className='cardText'>Our college programs offer quality education, expert instructors, and a nurturing learning environment to build a solid academic foundation.</div>
                                </div>
                            </NavLink>
                            <NavLink to="/education_program" className='buttonNav'>
                                <div className='card'>
                                    <div className='cardImage'>
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className='cardTitle'>My Newdawn Continuing Education</div>
                                    <div className='cardText'>For professionals and lifelong learners, our continuing education courses help you develop new skills, earn certifications, and stay competitive in today’s evolving job market.</div>
                                </div>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralLanding





