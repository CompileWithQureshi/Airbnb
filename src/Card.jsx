import React from "react";
import "./App.css";
// import image_12 from "./image 12.png";

const Card = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt="img-type" className="card-img" />
        <div className="card-stats">
          <span>*</span>
          <span className="gray">{props.no}</span>
          <span className="gray">{props.contry}</span>
        </div>
        <p>{props.qout}</p>
        <p>
          <span className="bold">{props.price}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
