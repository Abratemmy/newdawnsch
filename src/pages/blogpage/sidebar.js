import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

function Sidebar() {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);

	useEffect(() =>{
        const fetchBlogs = async () =>{
            setLoading(true);
            const res = await axios.get('https://wp.mynewdawn.org.ng/wp-json/wp/v2/blogs');
            setBlog(res.data);
            setLoading(false);
        }
        fetchBlogs()
    }, []);

    const Loading = () =>{
        return(
            <>
             <div className="loading"></div>
            </>
    )}
    return (
        <div className="">
            {loading ? <Loading /> : (  
                <div>
                    <div className="sidebar-header">News and event topics: </div>
                    <div className="sidebar-container">
                        {blog.map((blogposttitle, i)=>{ 
                            return(
                                <NavLink to= {`/newsupdate/${blogposttitle.id}`}className="sidebar-nav" key={i}>
                                    <div className="sidebar-page" >
                                    <h5>{blogposttitle.title.rendered}</h5>
                                    <p>{moment(blogposttitle.date).format("MMMM Do YYYY")}</p>
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
