import React from "react";
import "./App.css";
// import image_12 from "./image 12.png";

const Card = (props) => {
  // let item;
  // const { openSpots, location } = props;
  // console.log(props.item);
  // console.log(openSpots);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="img-type" className="card-image" />
      <div className="card-stats">
        <span className="card-star">
          * <br />
        </span>
        <span className="gray">
          <span>{props.item.stats.rating}</span>
          <span className="space"> </span>

          <span>({props.item.stats.reviewCount})</span>
          <span className="space"> </span>
        </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.qout}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
