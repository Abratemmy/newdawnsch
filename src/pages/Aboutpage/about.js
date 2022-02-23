import React from 'react';
import Otherpage from '../../components/otherpage/Otherpage';
import "./about.css";
import visionmisssion from "../../images/visionmission.jpg";
import schoolsong from "../../images/schsong.JPG";
import teacher from "../../images/teachers.jpg";
import faq from "../../images/faq.jpg"
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            <Otherpage title="About" subtitle="About" />

            <div className="about-container">
                <div className="container">
                    <div className="page-title">About Our School</div>
                    <hr className="line" />

                    <div className="about-text">
                        <span>My Newdawn College </span> is a school with a passion of giving a broad and quality educational program to students without any discrimination. Our Educational centre of many years lay the foundation for a life time of learning, which transform into secondary school that we become today.
                    </div>
                    <div className="about-text">
                        Our students are vast in learning and making progress in technological advancement.
                    </div>

                    <div className="page-title">Our School History</div>
                    <hr className="line" />

                    <div className="about-text">
                        The school was founded on January 4th 2019 by Mr KAYODE OLADOTUN AYEDUN (B. ED EDUCATIONAL MANAGEMENT & POLITICAL SCIENCE, & B. ED ADULT EDUCATION, All in UNIVERSITY OF IBADAN), 
                        having pass through process of transformation from a Tutorial outreach which was established in 2005.
                    </div>
                </div>

                <div className="container about-card-container">
                    <div className="card-container-text">You may also be interested in:</div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="about-card">
                                <NavLink to="/about/vission_mission" className="card-nav">
                                    <div className="about-card-text">
                                        <img src={visionmisssion} alt="vision-mission" width="100%" />
                                        <div className="card-text">Vision | Mission</div>
                                    </div>
                                    <div className="card-viewmore">View More</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="about-card">
                                <NavLink to="/about/school_song" className="card-nav">
                                    <div className="about-card-text">
                                        <img src={schoolsong} alt="vision-mission" width="100%" />
                                        <div className="card-text">School Song</div>
                                    </div>
                                    <div className="card-viewmore">View More</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="about-card">
                                <NavLink to="/about/staffs" className="card-nav">
                                    <div className="about-card-text">
                                        <img src={teacher} alt="vision-mission" width="100%" />
                                        <div className="card-text">Our Experience Staff</div>
                                    </div>
                                    <div className="card-viewmore">View More</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="about-card">
                                <NavLink to="/about/faqs" className="card-nav">
                                    <div className="about-card-text">
                                        <img src={faq} alt="vision-mission" width="100%" />
                                        <div className="card-text">FAQs</div>
                                    </div>
                                    <div className="card-viewmore">View More</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
