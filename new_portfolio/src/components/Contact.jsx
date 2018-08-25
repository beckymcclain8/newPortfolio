import React, { Component } from 'react';
import Banner from './Banner';
import ProfileImage from './ProfileImage';

class Contact extends Component {
    render() {
        return (
            <div className='container'>
                <Banner />
                <ProfileImage />
                <div className='contactMe'>My contact Info</div>
            </div>
        )
    }
}

export default Contact;