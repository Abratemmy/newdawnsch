import React, { useState } from 'react';
import "./ContinuingEducation.css";
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
// import { GiCheckMark } from "react-icons/gi";

function ContinuingEducation() {
    const [show, setShow] = useState(false);
    return (
        <div className='CEducation'>
            <div className='topBanner'>
                <div className='container'>
                    <div className='header'>
                        <div className="landingLogo">
                            <NavLink to="/"><img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088607/Mynewdawnschool/logo2_doqqvj.png' alt="logo" /></NavLink>
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
                            <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088598/Mynewdawnschool/edu1_zisjua.png' alt="edu1" />
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1742940439">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>



            {/* session 3 */}
            <div className='CSession3'>
                <div className='educationBanner'>
                    <div className='title'>What we are offering</div>
                    <div className='subtitle' ><div className='left'></div>Our Services<div className='right'></div></div>
                </div>
                <div className='Csession3Wrapper'>
                    <div className='container'>
                        <div className='headerWrapper'>
                            <div className='title'>Achieve Your Goals With Newdawn</div>
                            <p>Our Continuing Education Department specializes in providing high-quality training programs for adults and professionals in the health sector. We focus on healthcare services, social caregiving, and safety training.</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div className='title'>How It Works</div>
                            <div className='subtitle'><div className='left'></div>Our services<div className='right'></div></div>
                        </div>
                        <div className="contentWrapper">
                            <div className='image'>
                                <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088607/Mynewdawnschool/step1_imhr6b.jpg' alt="img1" className='img img1' />
                                <div className="absolute"><span>01</span></div>
                            </div>

                            <div className="content">
                                <div className='title'>Flexible Courses <div className="line"></div></div>
                                <div className='text'>
                                    At My Newdawn, we understand that balancing education with work and personal commitments can be challenging. That’s why our Continuing Education Department offers flexible courses designed to fit your schedule while equipping you with the skills needed for a successful career in the healthcare sector.
                                </div>
                                <div className='text'>
                                    Our programs specialize in healthcare services, social caregiving, and safety training, providing practical, hands-on learning to prepare you for real-world challenges.
                                    We prepare our students to excel in their roles, make a meaningful impact in their communities, and advance their careers in the ever-growing healthcare industry.
                                </div>
                                <div className="text">
                                    <strong> Program Length</strong>
                                    <ul>
                                        <li> 26 Weeks</li>
                                        <li>700 Hours</li>

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
                                        <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088597/Mynewdawnschool/course1_vy5fvu.jpg' alt="" />
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
                                        <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088598/Mynewdawnschool/course3_mrzric.jpg' alt="" />
                                    </div>
                                    <div className="cardAbs">
                                        <div className='cardTitle'>Social Caregiving</div>
                                        <div className='cardText'>We offer global training and certification in social caregiving, equipping individuals with skills to reduce risks, advance careers, and create safer workplaces.</div>
                                    </div>
                                </div>
                                <div className='cardCourse'>
                                    <div className='cardImage'>
                                        <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088603/Mynewdawnschool/course2_u8vlyc.jpg' alt="" />
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
                                <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088607/Mynewdawnschool/step2_yvxslb.jpg' alt="img1" className='img img1' />
                                <div className="absolute"><span>02</span></div>
                            </div>
                        </div>

                        <div className="contentWrapper">
                            <div className='image'>
                                <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743088608/Mynewdawnschool/step3_p28twj.png' alt="img1" className='img img1' />
                                <div className="absolute"><span>03</span></div>
                            </div>

                            <div className="content">
                                <div className='title'>Verifiable Certificates <div className="line"></div></div>
                                <div className='text' style={{paddingBottom:'20px'}}>
                                    Verify certificates on our website.
                                </div>

                                <NavLink to="/certificate-verification-portal" className="buttonNav" >Verify Certificate </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* session2 here */}
            <div className='CSession2'>
                <div className='educationBanner'>
                    <div className='title'>What You Will Learn In The Classroom</div>
                    <div className='subtitle' ><div className='left'></div>Our Courses<div className='right'></div></div>
                </div>
                <div className='container'>
                    <div className="Ccontent">
                        <div className='text'>
                            At <strong>My Newdawn,</strong> our healthcare training programs are designed to equip you with the skills and knowledge needed to provide quality care and support to individuals in various healthcare settings. Our courses focus on healthcare services, social caregiving, and safety training, preparing you for a fulfilling career in the healthcare sector.

                            Through our flexible programs, you will develop a strong foundation in compassionate
                            care, emphasizing respect, sensitivity, and professionalism. You will also gain
                            hands-on experience working alongside healthcare professionals. Whether assisting individuals
                            in their communities or within healthcare institutions,
                            you will play a crucial role in enhancing their well-being and quality of life.
                        </div>

                        <div className="subtitle">Modules covered in class include:</div>
                        <div className='moduleCourses'>

                            <ul style={{ width: '100%' }}>
                                <li>Introduction to healthcare assistant </li>
                                <li>Roles and responsibilities of caregiver</li>
                                <li>Legal and ethical issues in caregiving </li>
                                <li>Cultural diversity and caregiving</li>
                                <li>Communication skills</li>
                                <li>Personal and Professional border</li>
                                <li>Time management and Scheduling</li>
                                <li>Stress Management</li>
                                <li>Observing reporting and documentaion</li>
                                <li>Transfer Ettiquete </li>
                                <li>Transfer skills </li>
                                <li>Patient grooming and personal hygiene </li>
                                <li>Assisting with personal care</li>
                            </ul>
                            <div style={{ width: '100 %' }}>
                                <img src='https://res.cloudinary.com/hayteetech/image/upload/v1743102262/Mynewdawnschool/Program_Length_xdzfux.png' alt="" width='80%' />

                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContinuingEducation