import React from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./teacher.css";


function Teacher() {
    
    return (
        <div className="teacher">
            <Otherpage title="Our Director" subtitle="Director" />
            <div className="teacherpage">
                <div className="container">
                    <div className="page-title" style={{textAlign:"center", paddingBottom:"20px"}}>Our Director Profile</div>
                    
                    <div className="row director-profile">
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='director-img'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1649406857/Mynewdawnschool/newdawndirector_cr1mqx.jpg" alt="director profile" />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='director-content' >
                                <span>Oladotun Ayedun </span>is the Director of MY NEWDAWN COLLEGE. He is a graduate of Educational Management from the prestigious University of Ibadan and graduated in the year 2001. After NYSC, he started his Educational career with De-peak College in 2003 and was there till 2006. In 2007, the vision of having a school started with the establishment of MY-NEWDAWN EDUCATIONAL CONSULT and the center has produced many graduates in different fields. He also obtained  another degree certificate in Adult Education in 2014. In 2020, the vision of having a school in order to give academic potentialities the actual breath 
                                of life became a reality and today we have students in different classes and more are still coming.
                            </div>
                        </div>
                    </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12">
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
                        </div> */}
                   
                    
                      

                
                </div>
            </div>
        </div>
    )
}

export default Teacher
