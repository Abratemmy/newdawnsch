import React, { Component } from 'react';
import { FaHome } from "react-icons/fa";
import "./otherpage.css";
import { NavLink } from "react-router-dom";
import NewNavbar from '../newnavbar/NewNavbar';

export class Otherpage extends Component {
    render(title, subtitle) {
        return (
            <div>
                <NewNavbar />
                <div className="otherpage-background">
                    <div className="container">
                        <div className="otherpage-container">
                            <div className="otherpage-title">{this.props.title}</div>
                            <div className="otherpage-subtitle big-screen"><FaHome className="otherpage-icon" /> <NavLink to="/college" className="otherpage-link">Homepage </NavLink><span>-</span> {this.props.subtitle}</div>
                        </div>

                        <div className="otherpage-subtitle small-screen"><FaHome className="otherpage-icon" /> <NavLink to="/college" className="otherpage-link">Homepage </NavLink></div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Otherpage

