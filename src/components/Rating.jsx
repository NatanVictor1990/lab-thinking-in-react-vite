import React from "react";

function Rating({ children }) {
  const filledStars = Math.round(children);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
}

export default Rating;