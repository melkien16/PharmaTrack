import React from "react";

const Card = (props) => {
  return <div className="shadow-lg rounded-lg">{props.children}</div>;
};

export default Card;
