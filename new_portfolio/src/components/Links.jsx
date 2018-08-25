import React, { Component } from "react";
import { Link } from "react-router-dom";

const InfoLink = props => (
         <div className={props.title}>
            <Link to={props.title}>{props.title}</Link>
        </div>
);   


export default InfoLink;
