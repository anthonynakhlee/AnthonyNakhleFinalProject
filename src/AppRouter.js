import React from 'react';
import Home from './Home.js';
import App from './App';
import Creepy from './Creepy.js';
import Paranormal from './Paranormal.js';
import Urban from './Urban.js';
import Contact from './Contact.js';
import {BrowserRouter, Router, Route, Switch, Link  } from 'react-router-dom';
import AdminStoryList from './AdminStoryList';
import StoryForm from './StoryForm';
import StoryList from './StoryList';
import AddStory from './AddStory';



const AppRouter = () => (       
            <BrowserRouter>
            <Switch>       
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/creepy" component={Creepy} />
            <Route exact path="/paranormal" component={Paranormal} />
            <Route exact path="/urban" component={Urban} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/AdminStoryList" component={AdminStoryList} />
            <Route exact path="/add" component={AddStory} />
            <Route exact path="/StoryList" component={StoryList} />
            <Route exact path="/AddStory" component={AddStory} />
            </Switch>
            </BrowserRouter> 
     );

export default AppRouter;
