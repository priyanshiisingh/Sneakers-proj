import React from "react";
import { CarouselDiv } from "../../assets/styles/ProductDesStyles";
import Carousel from "../Carousels/Carousel";
import MobCarousel from "../Carousels/MobCarousel";
import "../../assets/styles/buttonStyles.css";

const CarouselComp = () => {
  return (
    <CarouselDiv>
      <div className="full">
        <Carousel />
      </div>
      <div className="mobile">
        <MobCarousel />
      </div>
    </CarouselDiv>
  );
};

export default CarouselComp;
