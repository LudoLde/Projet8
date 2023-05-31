import React from "react";
import "../styles/StarsRating.css";

function StarRating({ rating }) {
   const RenderStars = () => {
      const stars = [];

      for (let i = 1; i <= 5; i++) {
         if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star fa-xl stars-full"></i>);
         } else {
            stars.push(<i key={i} className="fas fa-star fa-xl stars-empty"></i>);
         }
      }

      return stars;
   };

   return <div className="stars-container">{RenderStars()}</div>;
}

export default StarRating;
