import React from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./visionmission.css";


function Visionmission() {
    return (
        <div>
            <Otherpage title="Vision | Mission| Corevalues" subtitle="vision-mission" />
            
            <div className="visionmission">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="visionmission-card">
                                <div className="visionmission-title">Our Vision</div>
                                <div className="visionmission-text">Our vision is to draw a unique perspective on how we can better serve our community and nation especially 
                                    with the improvements in technology and the increased demand for quality education
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="visionmission-card">
                                <div className="visionmission-title">Mission statement</div>
                                <div className="visionmission-text">
                                    Our Schools Provide a veritable means for students to develop their talents and maximize their potentials. The core strategy is to provide the highest standards of curriculum and instruction to foster open education where young scholars have the opportunity to explore their world. The ultimate Aim is to build character and impact life skills critical
                                    for leadership and success in the twenty-first century and beyond, hereby grooming a truly unique generation.
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="visionmission-card">
                                <div className="visionmission-title">Our Aim</div>
                                <div className="visionmission-text">
                                Our aim is to lay the foundation of a life-long educational experience, which will give the individual confidence and respect that will overcome all distinctions of race, class, colour and creed.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-10">
                            <div className="visionmission-card">
                                <div className="visionmission-title">Our Core Values</div>
                                <div className="visionmission-text">
                                    <ul>
                                        <li>Fairness and justice</li>
                                        <li>Tolerance</li>
                                        <li>Respect for others</li>
                                        <li>Honesty</li>
                                        <li>Self confidence</li>
                                        <li>Personal responsibility</li>
                                        <li>Loyalty</li>
                                        <li>Enjoyment of, and commitment to learning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Visionmission
