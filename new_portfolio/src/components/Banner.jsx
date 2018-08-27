import React, { Component } from 'react';

const Banner = props => (
      <div className="banner">
        <h1 className={props.className}> {props.homeBanner}
          
        </h1>
        <h2 className={props.classbName}>{props.homeBanner2}</h2>
      </div>
    );

export default Banner;
