import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
    
    <Router>
        <App />
    </Router>,
    document.getElementById('root'))
registerServiceWorker()
