import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import "./newhome.css";
import {BiMusic} from "react-icons/bi";
import {BsPersonFill} from "react-icons/bs";
import {GiBubbleField , GiGraduateCap} from "react-icons/gi";
import {FaHandsHelping, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {IoLogoCodepen} from "react-icons/io";
import testimonydata from "./testimonydata.js";
import Slider from 'react-slick';
import moment from 'moment';


export class Newhome  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             loading: false,
        }
    }
    componentDidMount(){
            this.setState({
                loading: true,
            })
        return fetch(`https://wp.mynewdawn.org.ng/wp-json/wp/v2/blogs?per_page=3`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                data: responseJson,
                loading: false,
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    
    render(){
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
            arrows: false,
            className:"homeslides"
        };
        var homeblog={
            slidesToShow:3,
            className:"homeblogcss",
            responsive:[
                {
                    breakpoint:1000,
                    settings:{
                        slidesToShow:2,
                    }
                },
                {
                    breakpoint:760,
                    settings:{
                        slidesToShow:1,
                    }
                }

            ]
        }
        return (
            <div className="homepage">
                <div className="home-container">
                    <div className="container">
                        <div className="homecontainer-text">
                            <div className="home-text">Education is the most powerful weapon</div>
                            <h1>Enjoy Learning Center</h1>
                            <p>Education is the passport to the future, for tomorrow belongs to those who prepare for it</p>
                            <button className="main-btn">
                                <NavLink to="/contact" className="btn-nav">Contact</NavLink>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="title-header">
                        <p>Join our journey of discovery</p>
                        <h1>Welcome to the <span>Bright Future </span>of your child</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="home-journey">
                                <div className="home-text">My-New Dawn School seeks to prepare students not only for their academic pursuits but for the future. Its also equip students 
                                    to live effectively in the modern age of science and technology.
                                </div>
                                <div className="home-text">
                                    In My-New Dawn School, We raise a generation that can think for themselves, respect the views and feelings of others. 
                                    We also expose students to the cultural and ethical background of Nigeria to help them understand and appreciate their cultural heritage and unity in diversity.
                                </div>
                            </div>
                            <div className="home-btn" style={{textAlign:"center"}}>
                                <button className="main-btn">
                                    <NavLink to="/about" className="btn-nav">Learn more</NavLink>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="home-journey">
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1645890529/Mynewdawnschool/homejourney_ulfxph.jpg" alt="loading" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-provide">
                    <div className="container" style={{opacity:"1"}}>
                        <div className="title-header">
                            <h1>What we provide</h1>
                            <p>We provide the following for the comfortability of our students</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="home-provide-content">
                                    <div className="home-provide-img ">
                                        <FaHandsHelping className="home-provide-icon home-icon1" />
                                    </div>
                                    <div className="home-provide-title">Friendly Environment</div>
                                    <div className="home-provide-text">Our Environment is suitable and comfortable for learning</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="home-provide-content">
                                    <div className="home-provide-img ">
                                        <GiGraduateCap className="home-provide-icon home-icon2" />
                                    </div>
                                    <div className="home-provide-title">Activity Rooms</div>
                                    <div className="home-provide-text">There are various classes in the school including laboratories for our science students</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="home-provide-content">
                                    <div className="home-provide-img">
                                        <GiBubbleField className="home-provide-icon home-icon3"  />
                                    </div>
                                    <div className="home-provide-title">Playing Field</div>
                                    <div className="home-provide-text">All work and no play makes Jack a dull boy. There are different sessions of games in the school premises</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="home-provide-content">
                                    <div className="home-provide-img ">
                                        <IoLogoCodepen className="home-provide-icon home-icon4" />
                                    </div>
                                    <div className="home-provide-title">Coding Session</div>
                                    <div className="home-provide-text">As the world is evolving round technology, we are introducing students to technology</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="home-provide-content">
                                    <div className="home-provide-img ">
                                        <BiMusic className="home-provide-icon home-icon5" />
                                    </div>
                                    <div className="home-provide-title">Music Class</div>
                                    <div className="home-provide-text">There are also music session for students that are interested on every friday of the week</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="home-provide-content">
                                    <div className="home-provide-img ">
                                        <BsPersonFill className="home-provide-icon home-icon6" />
                                    </div>
                                    <div className="home-provide-title">Expert Staffs</div>
                                    <div className="home-provide-text">Our Staffs are experienced and qualified. </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

                {/* anotther session dstarts here */}

                <div className="testimonial">
                    <div className="container">
                        <div className="title-header">
                            <h1 style={{color:"#fff"}}>What Our Parents Say</h1>
                        </div>
                        <div className="home-testimonial-container">
                            <div><FaQuoteLeft className="home-testimony-quote"/></div>

                            <Slider {...testimony} className="testimony-Slider">
                                {testimonydata.map(data =>{
                                    return(
                                        <div key={data.id} className="textimony-container">                                                
                                            <span className="testimony-text">{data.testimony}</span>
                                            <div className="testimony-name">{data.name}</div>
                                        </div>
                                    )
                                })}
                            </Slider>

                            <div style={{paddingTop:"20px"}}><FaQuoteRight className="home-testimony-quote"/></div>
                        </div>
                    </div>
                </div>

                {/* another session starts here. home blog starts here */}
                <div className="home-blog">
                    <div className="container">
                        <div className="title-header">
                            <h1>Our News & Events</h1>
                        </div>

                        {this.state.loading ? (<div>
                                <div className="loading" style={{paddingBottom: "30px"}}></div>
                            </div>) : (  
                            <Slider {...homeblog} className="home-blog-slide">
                                {this.state.data.map((item, i)=>{
                                        return(
                                            <div key={item.id} className="container">
                                                <div className="blog-container">
                                                    <img src={item.acf.blogimage} alt="loading" className="homeblog-img" />
                                                    <div className="home-blog-title"><p  dangerouslySetInnerHTML={{__html:  item.title.rendered}} /></div>
                                                    <div className="home-blogdate">{moment(item.date).format("MMMM Do YYYY")}</div>
                                                    <div className="homeblog-text">{item.acf.blogexcerpt}</div>
                                                    <div className="homeblog-readmore">
                                                        <NavLink to={`/newsupdate/${item.id}`} className="homeblognav">Read More </NavLink></div>
                                                </div>
                                            </div> 
                                        )
                                    })}
                            </Slider>
                        )}
                        
                        <div className="" style={{textAlign:"center", paddingBottom:"40px"}}>
                            <button className="main-btn" style={{marginTop:"0px"}}>
                                <NavLink to="/newsupdate" className="btn-nav">View all posts</NavLink>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Newhome
