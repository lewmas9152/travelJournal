import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={`assets/${props.item.image}`} alt="mt.Fuji" className="image" />
      <div className="desc">
        <div className="location">
          <img src="assets/location.png" alt="locationIcon" />
         <div className="map">
         <p className="country">{props.item.country}</p>
          <a href="{props.link}">view on Google Maps</a>
         </div>
        </div>
        <h1>{props.item.title}</h1>
        <p className="date">{props.item.date}</p>
        <p className="about">
         {props.item.about}
        </p>
      </div>
    </div>
  );
};

export default Card;
