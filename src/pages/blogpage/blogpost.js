import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import blogpost from "../blogpage/data.js";
import "./blog.css";
import {BiTime} from "react-icons/bi";
import {FaRegCommentDots} from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Blogpost = () => {

    const[pageNumber, setPageNumber] = useState(0);

    const newsPerPage = 5
    const newsVisited = pageNumber * newsPerPage

    const displayNews = blogpost.slice(newsVisited, newsVisited + newsPerPage).map((blogpost)=>{
        return(
            <div className="row blogpost-container">
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <img src={blogpost.image} alt="loading" width="100%" />
                    <div className="blogpost-banner">Event<br />News </div>
                </div>

                <div className="col-lg-7 col-md-7 col-sm-7">
                    
                    <div className="blogpost-content">
                        <NavLink to= {`/newsupdate/${blogpost.id}`} className="blogpost-nav">
                            <div className="blogpost-title">{blogpost.title}</div>
                            <div className="blogpost-text">{blogpost.excerpt} </div>
                        </NavLink>
                        <div className="blogpostdate">
                            <span><BiTime className="blogpost-icon" /></span>{blogpost.date}
                            <span><FaRegCommentDots className="blogpost-icon" /> Comment off</span>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    })

    const pageCount = Math.ceil(blogpost.length / newsPerPage);

    const changePage = ({selected})=>{
        setPageNumber(selected)
        // this is to scroll up when 
        window.scrollTo(0, 0)
    }

    
    return (
        <div>         
            {displayNews}
            <ReactPaginate 
                previousLabel={"Prev"}
                nextLAbel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}            
            />
                                
        </div>
    )
}

export default Blogpost
