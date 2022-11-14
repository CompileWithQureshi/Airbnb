import React from "react";
import "./App.css";
// import image_12 from "./image 12.png";

const Card = ({ img, no, contry, qout, price }) => {
  console.log({ img, no, contry, qout, price });
  return (
    // <div className="container">
    <div className="card">
      <img src={img} alt="img-type" className="card-img" />
      <div className="card-stats">
        <span>*</span>
        <span className="gray">{no}</span>
        <span className="gray">{contry}</span>
      </div>
      <p>{qout}</p>
      <p>
        <span className="bold">{price}</span>
      </p>
    </div>
    // </div>
  );
};

export default Card;
