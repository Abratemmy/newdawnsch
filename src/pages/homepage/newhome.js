import React from 'react';
import { NavLink } from 'react-router-dom';
import "./newhome.css";

function Newhome() {
    return (
        <div className="homepage">
            <div className="home-container">
                <div className="container">
                    <div className="homecontainer-text">
                        <div className="home-text">Education is the most powerful weapon</div>
                        <h1>Enjoy Learning Center</h1>
                        <p>Education in its general sense is a form of learning in the knowledge, skills and habit</p>
                        <button className="main-btn">
                            <NavLink to="/contact" className="btn-nav">Contact</NavLink>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="title-header">
                    <p>Join our journey of discovery</p>
                    <h1>The <span>Bright Future </span>of your child</h1>
                </div>
            </div>
        </div>
    )
}

export default Newhome
