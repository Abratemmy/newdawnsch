import React, {useState} from 'react'
import Otherpage from '../../components/otherpage/Otherpage';
import gallerydata from './gallerydata';
import './gallery.css'

const Gallery = () => {
    const [noOfElement, setnoOfElement ] = useState(4);

    const loadmore = () =>{
        setnoOfElement(noOfElement + 4);
    }
    const slice = gallerydata.slice(0, noOfElement);
    return (
        <div>
            <Otherpage title="Gallery" subtitle="gallery" />

            <div className="gallery-container">
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {slice.map((gallery, index) =>{
                            return(
                                <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
                                    <div className="gallery" key={index}>
                                        <img src={gallery.img} className="gallery-image" />
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
           
        </div>
    )
}

export default Gallery
