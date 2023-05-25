import data from "../data/data.json";
import "../styles/Carroussel.css";
import arrowright from "../assets/arrowright.svg";
import arrowleft from "../assets/arrowleft.svg";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Svg from "./SvgRight";
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

   return (
      <div className="carousel">
         <p className="carousel-compteur">
            {currentImageIndex + 1}/{images.length}
         </p>
         <button className="carousel-btn" onClick={nextImage}>
            <SvgRight />
         </button>
         <img src={images[currentImageIndex]} alt="carousel-image" className="carousel-images" />
         <button className="carousel-btn" onClick={previousImage}>
            <SvgLeft />
         </button>
      </div>
   );
};

export default Carousel;
