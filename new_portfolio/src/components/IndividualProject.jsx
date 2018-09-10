import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

const IndivProj = props => (
  <div className={props.className}>
    <a href= {props.website}>
      <img
        src={require("../images/jarvis2.JPG")}
        alt="Becky McClain"
        className="projectPic"
      />
      <br />
    </a>

    <div className="projectDescription">
      {props.projectDescription}
      <br />
      <br />
      {props.projDesc2}
      <br />
      <br />
      {props.projDesc3}
    </div>
    <hr />
  </div>
);

export default IndivProj;
