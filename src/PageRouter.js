import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import HomePage from './pages/HomePage'
import RegisterTitlePage from './pages/RegisterTitlePage'
import SearchPage from './pages/SearchPage'
import ConfirmationPage from './pages/ConfirmationPage';

function PageRouter() {
    return (
        <Router>
            <NavBar  />
            <Route exact path="/" component={HomePage}/>
            <Route  path="/register/" component={RegisterTitlePage}/>
            <Route  path="/confirm/" component={ConfirmationPage}/>
            <Route  path="/search/" component={SearchPage}/> 
           
        </Router>
    )
}

export default PageRouter
