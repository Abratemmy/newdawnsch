import React, { useState, useEffect } from 'react';
import Otherpage from '../../components/otherpage/Otherpage.js';
import { FaRegCommentDots } from "react-icons/fa";
import Sidebar from './sidebar.js';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const SinglePost = (props) => {
    const { title } = useParams();
    const [singleblog, setSingleblog] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTemplate = async () => {
            setLoading(true);
            let response = await fetch(`https://newdawnadmin.onrender.com/blog/${title}`);
            response = await response.json();
            //  console.log(response.acf)
            setSingleblog(response);
            setLoading(false);
        }
        getTemplate();
    }, [title])

    console.log("singlenlog", singleblog)
    const Loading = () => {
        return (
            <>
                <div className="loading"></div>
            </>
        )
    }

    return (
        <div className="">
            <Otherpage title="Blog" subtitle="blog" />
            <div className="singlepost-container" >
                <div className="container">
                    {loading ? <Loading /> : (
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="singlepost-heading">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-4 col-sm-2">
                                            <div className="singlepost-date">
                                                <h1>{moment(singleblog?.createdAt).format("D")} </h1>
                                                {moment(singleblog?.createdAt).format("MMMM")}
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-8 col-sm-12">
                                            {singleblog && <div className="singlepost-title">{singleblog?.title}</div>}

                                            <div className="singlepost-others"><p>EVENT, NEWS </p> <span><FaRegCommentDots className="singlepost-icon" /> Comment Off</span></div>
                                            <hr />
                                        </div>
                                    </div>

                                    {singleblog?.image &&
                                        <div className="singlepost-img">
                                            <img src={singleblog?.image} alt="loading" />
                                        </div>
                                    }

                                    {singleblog?.content &&
                                        <div className="singlepost-text">
                                            {singleblog?.content}
                                        </div>
                                    }

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <Sidebar />
                            </div>
                        </div>
                    )
                    }

                </div>
            </div>

        </div>
    )
}

export default SinglePost
