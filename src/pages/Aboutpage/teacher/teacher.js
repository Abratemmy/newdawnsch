import React from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./teacher.css";
import teacher1 from "../../../images/teacher1.JPG";
import teacher2 from "../../../images/teacher2.JPG";
import teacher3 from "../../../images/teacher3.JPG";
import teacher4 from "../../../images/teacher4.JPG";
import teacher5 from "../../../images/teacher5.JPG";
import teacher6 from "../../../images/teacher6.JPG";
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';



// const teachercard=[
//     {
//       id:"1",
//       image: teacher1,
//       name:" Newdawn Akande",
//       position:"Head Master",
//       facebook: "https://facebook.com",
//       instagram:"https://instagram.com",
//       linkedin:"https://linkedin.com"  
//     },
//     {
//         id:"2",
//         image: teacher2,
//         name:" Atorise A O",
//         position:"Physics Teacher",
//         facebook: "https://facebook.com",
//         instagram:"https://instagram.com",
//         linkedin:"https://linkedin.com"  
//     },
//     {
//         id:"3",
//         image: teacher3,
//         name:" Alafia Majekodunmi",
//         position:"Chemistry Teacher",
//         facebook: "https://facebook.com",
//         instagram:"https://instagram.com",
//         linkedin:"https://linkedin.com"  
//     },
//     {
//         id:"4",
//         image: teacher4,
//         name:" Olaosebikan Joy",
//         position:"Maths Teacher",
//         facebook: "https://facebook.com",
//         instagram:"https://instagram.com",
//         linkedin:"https://linkedin.com"  
//     },
//     {
//         id:"5",
//         image: teacher5,
//         name:" Abosede Vivian",
//         position:"English Teacher",
//         facebook: "https://facebook.com",
//         instagram:"https://instagram.com",
//         linkedin:"https://linkedin.com"  
//     },
//     {
//         id:"6",
//         image: teacher6,
//         name:" Akanmu Adisa",
//         position:"Supervisor",
//         facebook: "https://facebook.com",
//         instagram:"https://instagram.com",
//         linkedin:"https://linkedin.com"  
//     },
// ]
function Teacher() {
    
    return (
        <div className="teacher">
            <Otherpage title="Our teacher" subtitle="our teacher" />
            <div className="teacherpage">
                <div className="container">
                    <div className="page-title" style={{textAlign:"center", paddingBottom:"20px"}}>Our experience staffs</div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="teacher-card"> 
                                <img src={teacher1} alt="teacher" width="100%" />
                                <div className="teacher-name">NewDawn Akanni</div>
                                <div className="teacher-position">Head Master</div>
                                <div className="teacher-social-icon">
                                    <span><a href="https://facebook.com"><FaFacebookF className="teacher-icon" /></a></span>
                                    <span><a href="https://instagram.com"><FaInstagram className="teacher-icon" /></a></span>
                                    <span><a href="https://linkedin.com"><FaLinkedin className="teacher-icon" /></a></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="teacher-card"> 
                                <img src={teacher2} alt="teacher" width="100%" />
                                <div className="teacher-name">Olaosebikan Ajao</div>
                                <div className="teacher-position">Supervisor</div>
                                <div className="teacher-social-icon">
                                    <span><a href="https://facebook.com"><FaFacebookF className="teacher-icon" /></a></span>
                                    <span><a href="https://instagram.com"><FaInstagram className="teacher-icon" /></a></span>
                                    <span><a href="https://linkedin.com"><FaLinkedin className="teacher-icon" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="teacher-card"> 
                                <img src={teacher3} alt="teacher" width="100%" />
                                <div className="teacher-name">Atorise Alao</div>
                                <div className="teacher-position">Maths teacher</div>
                                <div className="teacher-social-icon">
                                    <span><a href="https://facebook.com"><FaFacebookF className="teacher-icon" /></a></span>
                                    <span><a href="https://instagram.com"><FaInstagram className="teacher-icon" /></a></span>
                                    <span><a href="https://linkedin.com"><FaLinkedin className="teacher-icon" /></a></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="teacher-card"> 
                                <img src={teacher4} alt="teacher" width="100%" />
                                <div className="teacher-name">Olorunnibe Joy</div>
                                <div className="teacher-position">Physics teacher</div>
                                <div className="teacher-social-icon">
                                    <span><a href="https://facebook.com"><FaFacebookF className="teacher-icon" /></a></span>
                                    <span><a href="https://instagram.com"><FaInstagram className="teacher-icon" /></a></span>
                                    <span><a href="https://linkedin.com"><FaLinkedin className="teacher-icon" /></a></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="teacher-card"> 
                                <img src={teacher5} alt="teacher" width="100%" />
                                <div className="teacher-name">Akanni Alao</div>
                                <div className="teacher-position">Chemistry master</div>
                                <div className="teacher-social-icon">
                                    <span><a href="https://facebook.com"><FaFacebookF className="teacher-icon" /></a></span>
                                    <span><a href="https://instagram.com"><FaInstagram className="teacher-icon" /></a></span>
                                    <span><a href="https://linkedin.com"><FaLinkedin className="teacher-icon" /></a></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="teacher-card"> 
                                <img src={teacher6} alt="teacher" width="100%" />
                                <div className="teacher-name">Ajisebutu Vivian</div>
                                <div className="teacher-position">English teacher</div>
                                <div className="teacher-social-icon">
                                    <span><a href="https://facebook.com"><FaFacebookF className="teacher-icon" /></a></span>
                                    <span><a href="https://instagram.com"><FaInstagram className="teacher-icon" /></a></span>
                                    <span><a href="https://linkedin.com"><FaLinkedin className="teacher-icon" /></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                      

                
                </div>
            </div>
        </div>
    )
}

export default Teacher
