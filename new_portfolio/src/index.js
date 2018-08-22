import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import ProfileImage from './components/ProfileImage';
import './app.css'

ReactDOM.render(
    <div className="container">
        <Banner />
        <ProfileImage />
    </div>, document.getElementById('root')
)