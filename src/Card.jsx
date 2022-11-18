import React from "react";
import "./App.css";
// import image_12 from "./image 12.png";

const Card = (props) => {
  const { coverImg, reviewCount, location, qout, price } = props;
  console.log(props);
  return (
    <div className="container">
      <div className="card">
        <img src={coverImg} alt="img-type" className="card-image" />
        <div className="card-stats">
          <span className="card-star">*</span>
          <span className="gray">{reviewCount}</span>
          <span className="gray">{location}</span>
        </div>
        <p className="card--title">{qout}</p>
        <p className="card--price">
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
