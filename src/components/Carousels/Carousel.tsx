import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { displayData, thumbnailData } from "./data";
import "../../assets/styles/CarouselStyles.css";
import ModalCarousel from "../Modal/ModalCarousel";
import "../../assets/styles/buttonStyles.css";

const Carousel = () => {
  const [openModal, setOpenModal] = React.useState(false);
  function modalOpen() {
    setOpenModal(true);
  }
  function modalClose() {
    setOpenModal(false);
  }

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
          <img src={item} alt="" className="image" onClick={modalOpen} />
        ))}
      </Slider>
      {openModal ? (
        <div className="frame">
          <div className="backdrop">
            <svg
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={modalClose}
              className="modalClose">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="white"
                fill-rule="evenodd"
              />
            </svg>
            <ModalCarousel />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Carousel;
