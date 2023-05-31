import data from "../data/data.json";
import "../styles/Carousel.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import SvgRight from "./SvgRight";
import SvgLeft from "./SvgLeft";

const Carousel = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const params = useParams();
   const element = data.find((element) => element.id === params.id);
   const images = element.pictures;
   console.log(images);

   const previousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
   };

   const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
   };
   const showBtns = images.length > 1;

   return (
      <div className="carousel">
         <p className="carousel-compteur">
            {currentImageIndex + 1}/{images.length}
         </p>
         {showBtns && (
            <button className="carousel-btn" onClick={nextImage}>
               <SvgRight />
            </button>
         )}
         <img src={images[currentImageIndex]} alt="carousel" className="carousel-images" />
         {showBtns && (
            <button className="carousel-btn" onClick={previousImage}>
               <SvgLeft />
            </button>
         )}
      </div>
   );
};

export default Carousel;
