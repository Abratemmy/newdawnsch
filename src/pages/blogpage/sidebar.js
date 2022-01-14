import React from 'react';
import blogpost from "../blogpage/data.js";
import {NavLink} from "react-router-dom"

function Sidebar() {
    return (
        <div className="">
            <div className="sidebar-header">News and event topics: </div>
            <div className="sidebar-container">
                {blogpost.map(blogposttitle=>{
                    return(
                        <div className="sidebar-page">
                            
                            <NavLink to= {`/newsupdate/${blogposttitle.id}`} className="sidebar-nav">
                                <h5>{blogposttitle.title}</h5>
                                <p>{blogposttitle.date}</p>
                            </NavLink >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
