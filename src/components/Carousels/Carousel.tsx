import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { displayData, thumbnailData } from "./data";
import "../../assets/styles/CarouselStyles.css";

const Carousel = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider
        autoplay={false}
        arrows={false}
        dots
        initialSlide={0}
        infinite
        customPaging={(i) => {
          return (
            <div>
              <img src={thumbnailData[i]} alt="" className="image" />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator">
        {displayData.map((item) => (
          <img src={item} alt="" className="image" />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
