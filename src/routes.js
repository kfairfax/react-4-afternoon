import React, {Component} from 'react';
import Home from './components/Home/Home.js';
import About from './components/About/About.js'
import {Route, Switch} from 'react-router-dom'
import ClassList from './components/ClassList/ClassList.js'


export default (
    <Switch>
        <Route component = {Home} exact path='/'/>
        <Route component ={About} path= '/about'/>
        <Route component = {ClassList} path = '/classlist/:class'/>

    </Switch>

    
)
// ./src/components/Home/Home.js
// ./src/components/About/About.js