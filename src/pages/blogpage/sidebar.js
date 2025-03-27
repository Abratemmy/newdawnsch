import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

function Sidebar() {
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
    return (
        <div className="">
            {loading ? <Loading /> : (
                <div>
                    <div className="sidebar-header">News and event topics: </div>
                    <div className="sidebar-container">
                        {blog?.sort((a, b) => moment(new Date(b.id)) - moment(new Date(a.id))).slice(0, 5).map((blogposttitle, i) => {
                            return (
                                <NavLink to={`/newsupdate/${blogposttitle?.title}`} className="sidebar-nav" key={i}>
                                    <div className="sidebar-page" >
                                        <h5>{blogposttitle?.title}</h5>
                                        <p>{moment(blogposttitle?.createdAt).format("MMMM Do YYYY")}</p>
                                    </div>
                                </NavLink >

                            )
                        })}
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Sidebar
