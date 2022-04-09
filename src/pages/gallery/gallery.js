import React, {useState, useEffect} from 'react'
import Otherpage from '../../components/otherpage/Otherpage';
import axios from 'axios';
import './gallery.css'

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    const [loading, setLoading] = useState(false);

	useEffect(() =>{
        const fetchGallery = async () =>{
            setLoading(true);
            const res = await axios.get('https://wp.mynewdawn.org.ng/wp-json/wp/v2/gallerys');
            setGallery(res.data);
            setLoading(false);
        }
        fetchGallery()
    }, []);

    const Loading = () =>{
        return(
            <>
                <div className="loading"></div>
            </>
    )}

    const [noOfElement, setnoOfElement ] = useState(4);

    const loadmore = () =>{
        setnoOfElement(noOfElement + 4);
    }
    const slice = gallery.slice(0, noOfElement);
    return (
        <div>
            <Otherpage title="Gallery" subtitle="gallery" />
            {loading ? <Loading /> : (  
                <div className="gallery-container">
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                            {slice.map((gallery, index) =>{
                                return(
                                    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
                                        <div className="gallery" key={index}>
                                            <img src={gallery.acf.image} className="gallery-image" alt={gallery.title.rendered}/>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                        <button className="btn  d-block gallery-btn" onClick={()=> loadmore()}>
                            Load More
                        </button>
                    </section>
                </div>
            )}
           
        </div>
    )
}

export default Gallery
