import React from "react";
import "./App.css";
// import image_12 from "./image 12.png";

const Card = (props) => {
  const { img, reviewCount, location, qout, price, rating, openSpots } = props;
  // console.log(openSpots);
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={img} alt="img-type" className="card-image" />
      <div className="card-stats">
        <span className="card-star">
          * <br />
        </span>
        <span className="gray">
          <span>{rating}</span>
          <span className="space"> </span>

          <span>({reviewCount})</span>
          <span className="space"> </span>
        </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card-title">{qout}</p>
      <p className="card-price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
