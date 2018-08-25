import React, { Component } from 'react';
import Banner from './Banner';
import ProfileImage from './ProfileImage';
import InfoLink from './Links';
import '../app.css'

class Home extends Component {
    render() {
        return (
    
        <div className="container">
            <Banner />
            <ProfileImage />
            <InfoLink 
            title= 'about'
            />
            <InfoLink 
            title= 'projects'
            />
            <InfoLink 
            title= 'blog'
            />
            <InfoLink 
            title= 'contact'
            />
        </div>
        
        );
    }
}

export default Home;