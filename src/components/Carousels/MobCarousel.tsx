import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { displayData } from "./data";
import "../../assets/styles/CarouselStyles.css";

const MobCarousel = () => {
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
      <Slider autoplay={false} arrows={true} initialSlide={0} infinite>
        {displayData.map((item) => (
          <img src={item} alt="" style={{ width: "100%", height: "40vh" }} />
        ))}
      </Slider>
    </div>
  );
};

export default MobCarousel;
