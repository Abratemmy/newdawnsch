import React, { Component } from 'react'
import './Home.css';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import homebanner from "../../images/sciencelab.jpeg";

import card1 from "../../images/background1.JPG";
import card2 from "../../images/background2.JPG";
import card3 from "../../images/school.jpeg";
import data from  "../../pages/blogpage/data.js";
import testimonydata from "./testimonydata.js";
import {FaQuoteRight, FaQuoteLeft} from "react-icons/fa";
import {HiArrowNarrowRight, HiArrowNarrowLeft} from "react-icons/hi"

// code for testimony arrow here
const PreviousBtn = (props) =>{
    const {className , onClick } = props;
    return(
        <div className={className} onClick={onClick}>
            <HiArrowNarrowRight style={{color:"red", fontSize:"30px"}} />
        </div>
    )
}

const NextBtn = (props) =>{
    const {className , onClick } = props;
    return(
        <div className={className} onClick={onClick}>
            <HiArrowNarrowLeft style={{color:"red", fontSize:"30px"}} />
        </div>
    )
}
export class Home extends Component {
    render() {
        var settings = {
            arrows:true,
            lazyLoad:true,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            // nextArrow:<NextBtn />,
            // prevArrow:<PreviousBtn />,
            className:"homeslides"
        };
        var homeblog={
            infinite: true,
            autoplay: true,
            slidesToScroll: 2,
            slidesToShow:3,
            speed: 700,
            dots:true,
            infinite: true,
            className:"homeblogcss",
            responsive:[
                {
                    breakpoint:960,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1
                    }
                }
            ]
        }
        var testimony = {
            dots:true,
            lazyLoad:true,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            className:"homeslides"
        };
        return (
            <div>
                <Slider {...settings} className="Slider">
                    <div className="background-pics background1">
                        <div className="container">
                            <div className="background-text">
                                <hr className="line" />
                                <h1>A College School Experience Like no other</h1>
                                <p>Every child desire the best education in life. We believe here is a wonderful place to start</p>
                            </div>
                        </div>
                    </div>
                    <div className="background-pics background2">
                        <div className="container">
                            <div className="background-text">
                                <hr className="line" />
                                <h1>Our Future leaders deserves the best formative education</h1>
                                <p> My-New Dawn is proud to offer students the opportunity to learn and grow in all educative aspects </p>
                            </div>
                        </div>
                    </div>
                </Slider>

                {/* banner code */}
                <div className="container">
                    <div className="home-banner">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="home-banner-img">
                                    <img src={homebanner} alt="loading" width="100%" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-9 col-sm-12">
                                <div className="home-banner-text">
                                    <div className="home-banner-title">Apply for Admission</div>
                                    <p>We are Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline,
                                        so you can use it with any backend you want. 
                                        Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="home-banner-button" style={{textAlign:"center"}}>
                                    <NavLink to="/application_form" className="nav-button">Apply Now </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* another section starts here */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-img">
                                    <img src={card1} alt="loading" />
                                </div>
                                <div className="layerclass">
                                    <h4>My-New Dawn Quote</h4>
                                    <p>short text will be here. develope a content</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-img">
                                    <img src={card2} alt="loading" />
                                </div>
                                <div className="layerclass">
                                    <h4>Our Alumni</h4>
                                    <p>short text will be here. develope a content</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-img">
                                    <img src={card3} alt="loading"  />
                                </div>
                                <div className="layerclass">
                                    <h4>Best Legacy</h4>
                                    <p>short text will be here. develope a content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* blog section starts here */}
                <div className="home-blog">
                    <div className="blue-background">
                        <div className="container">
                            <hr className="line" />
                            <div className="homeblog-title">News & Update</div>
                            <div className="home-banner-button home-banner-btn-bigscreen">
                                <NavLink to="/application_form" className="nav-button">View More</NavLink>
                            </div>    
                        </div>                         
                    </div>

                    <div className="home-blog-slide">
                        <div className="container">
                        <Slider {...homeblog} className="home-blog-slide">
                            {data.map(item =>{
                                    return(
                                        <div key={item.id} className="container">
                                            <div className="blog-container">
                                                <img src={item.image} alt="loading" className="homeblog-img" />
                                                <div className="home-blog-title">{item.title}</div>
                                                <div className="home-blogdate">{item.date}</div>
                                                <div className="homeblog-text">{item.excerpt}</div>
                                                <div className="homeblog-readmore">
                                                    <NavLink to="" className="homeblognav">Read More </NavLink></div>
                                            </div>
                                        </div> 
                                    )
                                })}
                        </Slider>

                        <div className="home-banner-button home-banner-btn-smallscreen">
                            <NavLink to="/application_form" className="nav-button">View More</NavLink>
                        </div>  
                        </div>
                    </div>
                </div>
                {/* subscribe section */}
                <div className="home-newsletter">
                    <div className="container">
                        <div className="text-center home-news-title">Subscribe to our newsletter</div>
                        <form>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="home-news-content">
                                        <input type="text" name="name" placeholder="Enter your Name" className="inputformhome" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="home-news-content">
                                        <input type="email" name="email" placeholder="Enter your Email"  className="inputformhome" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="home-news-content-button text-center">
                                        <button className="nav-button" style={{border:"none"}}>Signup</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* home testimony here */}
                <div className="home-testimony">
                    <div className="container">
                        <div className="testimony-title text-center">What Our Parents say</div>
                        <Slider {...testimony} className="testimony-Slider">
                            {testimonydata.map(data =>{
                                    return(
                                        <div key={data.id} className="">
                                            <div>
                                                <FaQuoteLeft className="testimony-quote"/><span className="testimony-text">{data.testimony}</span>
                                                <FaQuoteRight className="testimony-quote"/>
                                            </div>
                                            <div className="testimony-name">{data.name}</div>
                                        </div>
                                    )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
