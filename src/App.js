import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
    return(
        <div className="App">
          <Router>
         <Navbar/>
         <Switch>
             <Route exact path="/" component={Layout}/>
             <Route exact path="/login" component={Login}/>
         </Switch>
         </Router>
        </div>
    );
}

export default App;