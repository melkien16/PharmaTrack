import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-7">
      {props.children}
    </div>
  );
};

export default Card;
