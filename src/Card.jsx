import React from "react";
import "./App.css";
import image_12 from "./image 12.png";

export const Card = () => {
  return (
    <div className="card">
      <img src={image_12} alt="12-img" className="card-img" />
      <div className="">
        <span>*</span>
        <span className="gray">(6).</span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons from Katie Zaferes</p>
      <p>
        <span className="bold">From 130$/person</span>
      </p>
    </div>
  );
};
