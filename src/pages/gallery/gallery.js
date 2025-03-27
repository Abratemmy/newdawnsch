import React, { useState, useEffect } from 'react'
import Otherpage from '../../components/otherpage/Otherpage';
import axios from 'axios';
import './gallery.css'
import moment from 'moment';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchGallery = async () => {
            setLoading(true);
            const res = await axios.get('https://newdawnadmin.onrender.com/gallery');
            setGallery(res.data);
            setLoading(false);
        }
        fetchGallery()
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="loading"></div>
            </>
        )
    }

    const [noOfElement, setnoOfElement] = useState(4);

    const loadmore = () => {
        setnoOfElement(noOfElement + 4);
    }
    const slice = gallery.slice(0, noOfElement);


    const [popupcontent, setPopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false)

    const changeContent = (gallery) => {
        setPopupcontent([gallery]);
        setpopuptoggle(!popuptoggle);
        if (styling === null) {
            setStyling({ position: "fixed" })
        } else {
            setStyling(null)
        }
    }
    const [styling, setStyling] = useState(null);
    return (
        <div>
            <Otherpage title="Gallery" subtitle="gallery" />
            {loading ? <Loading /> : (
                <div className="gallery-container">
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                            {slice?.sort((a, b) => moment(new Date(b.createdAt)) - moment(new Date(a.createdAt))).map((gallery, index) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
                                        <div className="gallery" key={index} onClick={() => changeContent(gallery)}>
                                            <img src={gallery?.image} className="gallery-image" alt={gallery?.title} />
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        {gallery?.length > 4 ?
                            <button className="btn  d-block gallery-btn" onClick={() => loadmore()}>
                                Load More
                            </button>
                            : ""
                        }
                    </section>
                </div>
            )}

            {popuptoggle && (<div className='pop_up_container' onClick={changeContent}>
                <div className='pop_up_body' onClick={(e) => e.stopPropagation()}>
                    {/* e.stoppropagation prevent the changeContent function to have effect on the pop_up_body class */}
                    <div className="pop_up_header">
                        <button onClick={changeContent}>X</button>
                    </div>

                    <div className='pop_up_content'>
                        {popupcontent.map((pop) => {
                            return (
                                <div className="pop_up_card">
                                    <img src={pop.image} alt="" />

                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default Gallery
