import React from 'react';
import { NavLink } from 'react-router-dom';
import Otherpage from '../../components/otherpage/Otherpage';
import "./admission.css";
import jsPDF from "jspdf";
import form from "../../images/admissionform.jpeg"

function Admission() {
    const pdfGenerate=()=>{
        var doc=new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(form, 'JPEG',65, 30, 350, 400)
        doc.save('admissionform.pdf')

    }
    return (
        <div>
            <Otherpage title="Admission" subtitle="admission" />

            <div className="admission-page">
                <div className="container">
                    <div className="admission-text">
                        Choosing the right school marks a new beginning in the life of your child. Taking one’s time to explore 
                        educational options is an important decision for any family or parent. My-New Dawn School has been a 
                        co-educational school for more than 10 years; we understand how boys and girls learn and grow. 
                        We seek to aid the development of children 
                        in our care as scholars, athletes, artists and citizens by instilling in them the spirit of excellence.
                    </div>

                    <div className="admission-text">
                        Well-rounded education is of paramount importance at My-New Dawn School. We guide all students to develop personal integrity and leadership skills on which they can draw for the rest of their lives. We would love to help you understand the unique benefits that we have
                     to offer at My-New Dawn School, where we encourage each child to develop as a lifelong and confident learner.
                    </div>

                    <div className="admission-text">
                        Our staff enjoy full opportunities of a professionally trained personalities. Freedom to express their opinions in order for the school and other stake holders to benefit. They experience
                     retraining through seasonal experts which has made to be equal to non in the area of discharging their duties.
                    </div>

                    <div className="admission-text">
                    Students prefer us to other just because we have been bonded by our mission statement, which was drive by our vission.
                    </div>

                    <div className="admission-text">
                        Students seeking admission into our Secondary School are assessed formally. More structured assessments are conducted
                         for those students seeking entry into JSS 2 and SS2 classes in their major subjects especially in  Mathematics and English. Students must fulfill the entry requirements for each class before 
                        they are offered admission.
                    </div>

                    <div className="admission-text">
                        Most successful applicants join at the start of the School
                        year in September; occasionally students are admitted during the course of the school year based on availability.
                    </div>

                    <div className='admission-form'>
                        <div className='title-header'>
                            <h1>Admission form</h1>
                            <p style={{fontSize:"17px"}}>Download our admission form by clicking on the image below, fill the form and send the filled form to us at mynewdawncollege@gmail.com or bring the printed form to our school premises for the next steps</p>
                            <h6><span>Note:</span> Our admission form attract the sum of N1000 Only(One thousand naira only)</h6>
                        </div>

                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-12'></div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='admission-img'>
                                    <img src={form}  alt="admission-form" />
                                    <div className='overlay'>
                                        <button onClick={pdfGenerate}>Download Admission form</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-12'></div>
                        </div>
                        
                       
                    </div>

                    <div className="admission-contact">
                        <div className="admission-title">
                            Contact us on the telephone numbers or email addresses listed below to schedule an appointment.
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 admission-col">
                                <div className="admission-column">
                                    <div className="admission-column-title">Tel No:</div>

                                    <span> 08029748772</span>
                                    <span>08055372675</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 admission-col">
                                <div className="admission-column">
                                    <div className="admission-column-title">Email Addresses:</div>
                                    <span>mynewdawncollege@mynewdawn.org.ng</span>
                                    <span>Mynewdawncollege@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admission-text">
                        For more enquiries, <NavLink to="/contact" className="nav-btn-nav"> Contact us </NavLink >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admission
