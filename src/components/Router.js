import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../pages/Aboutpage/about';
import Teacher from '../pages/Aboutpage/teacher/teacher';
import Schoolsong from '../pages/Aboutpage/schoolsong/schoolsong'
import Visionmission from '../pages/Aboutpage/visionmission/visionmission'
import Contact from '../pages/Contactpage/contact';
import Newhome from '../pages/homepage/newhome';
import Faqs from '../pages/Aboutpage/faq/faqs';
import Admission from '../pages/Admission/admission';
import Tuition from '../pages/Admission/Tuition/Tuition';
import Blog from '../pages/blogpage/blog';
import SinglePost from '../pages/blogpage/singlePost';
import Gallery from '../pages/gallery/gallery';
import GeneralLanding from '../pages/GeneralLanding/GeneralLanding';
import ContinuingEducation from '../pages/ContinuingEducation/ContinuingEducation';
import CertificateVerification from '../pages/CertificateVerification/CertificateVerification';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<GeneralLanding />} />
            <Route exact path="/education_program" caseSensitive={false} element={<ContinuingEducation />} />
            <Route exact path='/certificate-verification-portal' caseSensitive={false} element={<CertificateVerification />} />
            <Route exact path="/college" caseSensitive={false} element={<Newhome />} />
            <Route exact path="/college/about" caseSensitive={false} element={<About />} />
            <Route exact path='/college/contact' caseSensitive={false} element={<Contact />} />
            <Route exact path="/college/about/director" caseSensitive={false} element={<Teacher />} />
            <Route exact path="/college/about/school_song" caseSensitive={false} element={<Schoolsong />} />
            <Route exact path="/college/about/vission_mission" caseSensitive={false} element={<Visionmission />} />
            <Route exact path="/college/about/faqs" caseSensitive={false} element={<Faqs />} />
            <Route exact path="/college/admission" caseSensitive={false} element={<Admission />} />
            <Route exact path="/college/tuition" caseSensitive={false} element={<Tuition />} />
            <Route exact path="/college/newsupdate" caseSensitive={false} element={<Blog />} />
            <Route exact path='/college/newsupdate/:title' caseSensitive={false} element={<SinglePost />} />
            <Route exact path="/college/gallery" caseSensitive={false} element={<Gallery />} />
        </Routes>
    )
}
export default Router