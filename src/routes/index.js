import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
import Home from '../components/Home/home';
import GalleryList from '../components/Login/login';

import '../styles/app.css';

export default () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route exact path="/login" render={(props)=> <Home {...props}/>} />
      <Route exact path="/:imageId" render={(props)=> <GalleryList {...props}/>} />
    </Switch>
   </BrowserRouter>
 )