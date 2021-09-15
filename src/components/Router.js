import react from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/homepage/Home';

const Router = ()=>(
    <Switch>
        
        <Route exact path="/" component={Home} />
    </Switch>
)
export default Router