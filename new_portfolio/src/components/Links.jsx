import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const InfoLink = props => (
//   <Animated animationOut="rotateOut" isVisible={true} className={props.className}>
    <div className={props.className}>
      <Link className="text" to={props.title}>
        {props.title}
      </Link>
    </div>
//   </Animated>
);

export default InfoLink;
