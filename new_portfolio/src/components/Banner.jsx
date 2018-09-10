import React, { Component } from 'react';

const Banner = props => (
      <div className="banner">
        <h1 className={props.className}> {props.homeBanner}
          
        </h1>
        <h2 className={props.className}>{props.homeBanner2}</h2>
        <hr />
      </div>
    );

export default Banner;
