import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { displayData } from "./data";
import "../../assets/styles/CarouselStyles.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon color="#000" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon color="#000" />
    </div>
  );
}

const MobCarousel = () => {
  const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
      <Slider {...settings}>
        {displayData.map((item) => (
          <img src={item} alt="" style={{ width: "100%", height: "40vh" }} />
        ))}
      </Slider>
    </div>
  );
};

export default MobCarousel;
