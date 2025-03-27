import React, { useState } from 'react';
import "./ContinuingEducation.css";
import { NavLink } from 'react-router-dom';
import edu1 from '../../images/edu1.png';
import { FaHome } from "react-icons/fa";
import edu2 from '../../images/edu2.png';
import { GiCheckMark } from "react-icons/gi";
import step1 from '../../images/step1.jpg';
import step2 from '../../images/step2.jpg';
import step3 from '../../images/step3.png';
import course1 from '../../images/course1.jpg';
import course2 from '../../images/course2.jpeg';
import course3 from '../../images/course3.jpg';
import logo from '../../images/logo2.png';

function ContinuingEducation() {
    const [show, setShow] = useState(false);
    return (
        <div className='CEducation'>
            <div className='topBanner'>
                <div className='container'>
                    <div className='header'>
                        <div className="landingLogo">
                            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                        </div>

                        <div className="headerContact">
                            <NavLink to="/college" className='buttonNav'>Newdawn College</NavLink>
                        </div>
                    </div>
                    <div className='wrapperDiv'>
                        <div className='wrapper'>
                            <div className='top2'>
                                <div className='icon'><FaHome /></div>
                                <div className='text22'>Education Program</div>
                            </div>
                            <div className='title'>Let's Learn New Courses Earn More Skills</div>
                            <div className='text'>
                                For professionals and lifelong learners, our continuing education courses help you develop new skills, earn certifications, and stay competitive in today’s evolving job market.
                            </div>
                            <button
                                onClick={() => setShow(!show)}
                                className='buttonNav buttonNav2'>Make An Enquiry</button>
                            {show && <div className='alertShow animate__animated animate__backInUp animate__delay-0.1s'>
                                <div className='callUs'>
                                    <div className='subtitle'>Call Us</div>
                                    <div className='text'>+2348029748772, +2348055372675</div>
                                </div>
                                <div className='callUs'>
                                    <div className='subtitle'>Email Us</div>
                                    <div className='text'>mynewdawncollege@gmail.com</div>
                                </div>

                            </div>
                            }
                        </div>

                        <div className='wrapperImage'>
                            <img src={edu1} alt="edu1" />
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1742940439">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className='CSession2'>
                <div className='container'>
                    <div className="Ccontent">
                        <div className='Ccard'>
                            <div className='title'>Achieve Your Goals With Newdawn</div>
                            <p>Our Continuing Education Department specializes in providing high-quality training programs for adults and professionals in the health sector. We focus on healthcare services, social caregiving, and safety training.</p>
                            <div className='programs'>
                                <div className='pTitle'>Program OverView</div>
                                <div className="pText">We offer two comprehensive programs:</div>
                            </div>

                            <div className='programs'>
                                <div className='pTitle'><span>1</span>Certificate Program (4 months)</div>
                                <div className="pText"><div className="icon"><GiCheckMark className='logo' /></div>- 4 weeks of classroom instruction</div>
                                <div className="pText"><div className="icon"><GiCheckMark className='logo' /></div>-  12 weeks of clinical experience</div>

                            </div>
                            <div className='programs'>
                                <div className='pTitle'><span>2</span>Diploma Program (6 months)</div>
                                <div className="pText"><div className="icon"><GiCheckMark className='logo' /></div>- 4 weeks of classroom instruction</div>
                                <div className="pText"><div className="icon"><GiCheckMark className='logo' /></div>-  20 weeks of clinical experience</div>
                            </div>
                        </div>

                        <div ClassName='CImage'>
                            <img src={edu2} alt="edu2" className='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* session 3 */}
            <div className='CSession3'>
                <div className='Cservices'>
                    <div className='title'>What we are offering</div>
                    <div className='subtitle' ><div className='left'></div>Our services<div className='right'></div></div>
                </div>
                <div className='Csession3Wrapper'>
                    <div className='container'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div className='title'>How It Works</div>
                            <div className='subtitle'><div className='left'></div>Our services<div className='right'></div></div>
                        </div>
                        <div className="contentWrapper">
                            <div className='image'>
                                <img src={step1} alt="img1" className='img img1' />
                                <div className="absolute"><span>01</span></div>
                            </div>

                            <div className="content">
                                <div className='title'>Flexible Courses <div className="line"></div></div>
                                <div className='text'>
                                    At My Newdawn, we understand that balancing education with work and personal commitments can be challenging. That’s why our Continuing Education Department offers flexible courses designed to fit your schedule while equipping you with the skills needed for a successful career in the healthcare sector.
                                </div>
                                <div className='text'>
                                    Our programs specialize in healthcare services, social caregiving, and safety training, providing practical, hands-on learning to prepare you for real-world challenges. Whether you’re looking to enter the healthcare industry or advance your current career, we offer two comprehensive options:
                                </div>
                                <div className="text">
                                    <strong> Certificate Program (4 months)</strong>
                                    <ul>
                                        <li> 4 weeks of classroom instruction</li>
                                        <li>12 weeks of clinical experience</li>

                                    </ul>
                                </div>
                                <div className='text'>
                                    <strong>Diploma Program (6 months)</strong>
                                    <ul>
                                        <li> 4 weeks of classroom instruction</li>
                                        <li>20 weeks of clinical experience</li>

                                    </ul>

                                </div>
                                <div className='text'>
                                    Take control of your future with our flexible, career-focused programs.<strong>Enroll today and start your journey toward professional excellence!</strong>
                                </div>
                            </div>
                        </div>
                        <div className='Coursescard' style={{ marginBottom: '30px' }}>
                            <div className="content">
                                <div className='title'>Our Healthcare Courses <div className="line"></div></div>
                            </div>
                            <div className='courseCard'>
                                <div className='cardCourse'>
                                    <div className='cardImage'>
                                        <img src={course1} alt="" />
                                    </div>

                                    <div className="cardAbs">
                                        <div className='cardTitle'>HealthCare Services</div>
                                        <div className='cardText'>
                                            We offer global training and certification in health services equipping individuals with skills to reduce risks, advance careers, and create safer workplaces.
                                        </div>
                                    </div>
                                </div>
                                <div className='cardCourse'>
                                    <div className='cardImage'>
                                        <img src={course3} alt="" />
                                    </div>
                                    <div className="cardAbs">
                                        <div className='cardTitle'>Social Caregiving</div>
                                        <div className='cardText'>We offer global training and certification in social caregiving, equipping individuals with skills to reduce risks, advance careers, and create safer workplaces.</div>
                                    </div>
                                </div>
                                <div className='cardCourse'>
                                    <div className='cardImage'>
                                        <img src={course2} alt="" />
                                    </div>
                                    <div className="cardAbs">
                                        <div className='cardTitle'>Safety Training</div>
                                        <div className='cardText'>We offer global training and certification in safety, and environmental management, equipping individuals with skills to reduce risks, advance careers, and create safer workplaces.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contentWrapper contentWrapper2">
                            <div className="content">
                                <div className='title'>Flexible Training <div className="line"></div></div>
                                <div className='text'>
                                    My NewDawn offers flexible training programs in healthcare, allowing students
                                    to balance their education with work and personal commitments. Our
                                    courses feature a blend of classroom instruction and hands-on clinical
                                    experience, ensuring practical skills and real-world application. Whether pursuing a certificate or diploma, learners can choose a
                                    schedule that fits their needs while gaining industry-relevant expertise.
                                </div>

                                <a href="mailto:mynewdawncollege@gmail.com" className='buttonNav buttonNav2'>Send Us a Mail</a>

                            </div>
                            <div className='image'>
                                <img src={step2} alt="img1" className='img img1' />
                                <div className="absolute"><span>02</span></div>
                            </div>
                        </div>

                        <div className="contentWrapper">
                            <div className='image'>
                                <img src={step3} alt="img1" className='img img1' />
                                <div className="absolute"><span>03</span></div>
                            </div>

                            <div className="content">
                                <div className='title'>Verifiable Certificates <div className="line"></div></div>
                                <div className='text'>
                                    Verify certificates on our website.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContinuingEducation