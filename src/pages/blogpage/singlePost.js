import React,{useState, useEffect} from 'react';
import Otherpage from '../../components/otherpage/Otherpage.js';
import blogpost from "../blogpage/data.js";
import {FaRegCommentDots} from "react-icons/fa";
import Sidebar from './sidebar.js';

const SinglePost =(props) =>{
    const [post, setPost] = useState({
        id:"",
        image:"",
        title:"",
        text:"",
        excerpt:"",
        date:"",
        day:"" ,
        month:"",
        video:""
    });


    const[postId, setPostId] = useState('');
    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogpost.find(post=>post.id === postId);
        setPost(post);
        setPostId(postId)
    },[post,props.match.params.postId]);

    if (post.image===""){
        return null;
    }

    return (
        <div className=""> 
            <Otherpage title="Blog" subtitle="blog" /> 
            <div className="singlepost-container" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="singlepost-heading">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-2">
                                        <div className="singlepost-date">
                                            <h1>{post.day} </h1>
                                            {post.month}
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-8 col-sm-12">
                                        <div className="singlepost-title">
                                            {post.title}
                                        </div>
                                        <div className="singlepost-others"><p>EVENT, NEWS </p> <span><FaRegCommentDots className="singlepost-icon" /> Comment Off</span></div>
                                        <hr />
                                    </div>
                                </div>

                                <div className="singlepost-img">
                                    <img src={post.image} alt="loading" />
                                </div>

                                <div className="singlepost-text">{post.text}</div>

                                <div className="singlepost-video">
                                    {post.video}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <Sidebar />
                        </div>
                    </div>
                   
                </div>
            </div>
             
        </div>
    )
}

export default SinglePost
