import React from "react";
import {BrowserRouter, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import LoginRegister from "./LoginRegister";
import Dashboard from "./Dashboard";
import Features from "./Features";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact component={LoginRegister}/>
                <Route path="/register" exact component={LoginRegister}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/features" exact component={Features}/>
            </BrowserRouter>
        )
    }
}

export default App;
