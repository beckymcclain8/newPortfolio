import React from 'react';
import '../app.css';

const BlogInfo = props => (
    <div className="blogNews">
    <div className="date">{props.date}</div>
    <br />
    <br /> 
    <div className="blogTitle">{props.blogTitle}</div>
    <br />
    <br />
    <div className={props.blogWords}>{props.blogWords}</div>
    </div>
);

export default BlogInfo;