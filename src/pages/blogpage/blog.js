import React from 'react'
import Otherpage from '../../components/otherpage/Otherpage'
import Blogpost from './blogpost'
import Sidebar from './sidebar'

function Blog() {
    return (
        <div className="">
            <Otherpage title="News & Events" subtitle="blog" />

            <div className="blogpage" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <Blogpost />
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
