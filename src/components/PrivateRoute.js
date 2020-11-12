import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './Home'


export default function PrivateRoute(props) {
    return localStorage.token 
        ? <Route render={() => <Home />} /> 
        : <Redirect to="/signup" />
}