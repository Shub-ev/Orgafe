// StarRating.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./StarRating.css";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} className="star half" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star empty" />);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
