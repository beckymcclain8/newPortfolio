import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import '../app.css';

class App extends Component {
    render() {
        return (
        <BrowserRouter>
        <div className="App">
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/contact' component={Contact} />
        </div>
        </BrowserRouter>
        
        );
    }
}

export default App;