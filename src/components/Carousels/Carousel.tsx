import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { displayData, thumbnailData } from "./data";

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
        dots
        initialSlide={1}
        infinite
        customPaging={(i) => {
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid green",
              }}>
              <img
                src={thumbnailData[i]}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator">
        {displayData.map((item) => (
          <div style={{ width: "50%", border: "1px solid red" }}>
            <img src={item} alt="" style={{ width: "50%", height: "40vh" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
