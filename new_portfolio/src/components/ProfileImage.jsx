import React, { Component } from 'react';

class ProfileImage extends Component {
    render() {
        return (
            <img
          src={require("../images/Becky.jpg")}
          alt="Becky McClain"
          className="myPic"
        />
        )
    }
}

export default ProfileImage;
