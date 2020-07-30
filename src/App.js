import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import TestPage from './pages/test-page/TestPage';
import WelcomeScreen from './pages/welcome-screen/WelcomeScreen';

export default () => {
    return (
        <div className="ui container">
            <h1 className="ui header center aligned">App</h1>
            <Router>
                <Route path="/test" exact component={TestPage} />
                <Route path="/" exact component={WelcomeScreen} />
            </Router>
        </div>
    );
};