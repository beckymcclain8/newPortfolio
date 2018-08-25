import React, { Component } from 'react';
import Banner from './Banner';
import ProfileImage from './ProfileImage';

class Blog extends Component {
    render() {
        return (
            <div className='container'>
                <Banner />
                <ProfileImage />
                <div className='blogNews'>
                Yadda Yadda Yadda
                </div>
            </div>
        )
    }
}

export default Blog;