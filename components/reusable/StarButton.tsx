import React from "react";

const StarButton = () => {
  return (
    <button type="button" className="btn">
      <strong>Enter the Void</strong>
      <div id="container-stars">
        <div id="stars"/>
      </div>

      <div id="glow">
        <div className="circle"/>
        <div className="circle"/>
      </div>
    </button>
  );
};

export default StarButton;
