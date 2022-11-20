import React from "react";
import "./App.css";
// import image_12 from "./image 12.png";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} alt="img-type" className="card-image" />
      <div className="card-stats">
        <span className="card-star">
          * <br />
        </span>
        <span className="gray">
          <span>{props.stats.rating}</span>
          <span className="space"> </span>

          <span>({props.stats.reviewCount})</span>
          <span className="space"> </span>
        </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.qout}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
