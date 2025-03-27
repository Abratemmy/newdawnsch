import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./blog.css";
import { BiTime } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import axios from 'axios';
import moment from 'moment';

const Blogpost = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const res = await axios.get('https://newdawnadmin.onrender.com/blog');
            setBlog(res.data);
            setLoading(false);
        }
        fetchBlogs()
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="loading"></div>
            </>
        )
    }

    const [pageNumber, setPageNumber] = useState(0);

    const newsPerPage = 4
    const newsVisited = pageNumber * newsPerPage

    const displayNews = blog?.sort((a, b) => moment(new Date(b.id)) - moment(new Date(a.id))).slice(newsVisited, newsVisited + newsPerPage).map((blogpost, i) => {
        return (
            <div className="row blogpost-container" key={i}>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <img src={blogpost?.image} alt="loading" width="100%" />
                    <div className="blogpost-banner">Event<br />News </div>
                </div>

                <div className="col-lg-7 col-md-7 col-sm-7">

                    <div className="blogpost-content">
                        <NavLink to={`/newsupdate/${blogpost?.title}`} className="blogpost-nav">
                            <div className="blogpost-title">{blogpost?.title}</div>
                            <div className="blogpost-text">{blogpost?.excerpt} </div>
                        </NavLink>
                        <div className="blogpostdate">
                            <span><BiTime className="blogpost-icon" /></span>{moment(blogpost?.createdAt).format("MMMM Do YYYY")}
                            <span><FaRegCommentDots className="blogpost-icon" /> Comment off</span>
                        </div>
                    </div>

                </div>

            </div>
        )
    })

    const pageCount = Math.ceil(blog.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        window.scrollTo(0, 0)
    }


    return (
        <div>
            {loading ? <Loading /> : (
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
            )}
        </div>
    )
}

export default Blogpost
