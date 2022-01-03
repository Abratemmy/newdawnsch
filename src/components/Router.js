import react from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../pages/Aboutpage/about';
import Teacher from '../pages/Aboutpage/teacher/teacher';
import Schoolsong from '../pages/Aboutpage/schoolsong/schoolsong'
import Visionmission from '../pages/Aboutpage/visionmission/visionmission'
import Contact from '../pages/Contactpage/contact';
// import Home from '../pages/homepage/Home';
import Newhome from '../pages/homepage/newhome';
import Faqs from '../pages/Aboutpage/faq/faqs';
import Admission from '../pages/Admission/admission';
import Tuition from '../pages/Admission/Tuition/Tuition';
import Blog from '../pages/blogpage/blog';
import SinglePost from '../pages/blogpage/singlePost';

const Router = ()=>(
    <Switch>
        
        <Route exact path="/newdawnsch" component={Newhome} />
        <Route exact path="/about" component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path="/about/staffs" component={Teacher} />
        <Route exact path="/about/school_song" component={Schoolsong} />
        <Route exact path="/about/vission_mission" component={Visionmission} />
        <Route exact path="/about/faqs" component={Faqs} />
        <Route exact path="/admission" component={Admission} />
        <Route exact path="/tuition" component={Tuition} />
        <Route exact path="/newsupdate" component={Blog} />
        <Route exact path ='/newsupdate/:postId' component={SinglePost} />
    </Switch>
)
export default Router