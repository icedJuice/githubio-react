import React, { Component } from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';

import index from './views/index/index.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={index}/>
                </div>
            </Router>
        );
    }
}

export default App;
