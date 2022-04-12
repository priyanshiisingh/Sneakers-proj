import React from "react";
import {
  PrimaryDiv,
  SecondaryDiv,
  TertiaryDiv,
  InfoDiv,
  Controls,
} from "../../assets/styles/ProductDesStyles";
import "../../assets/styles/buttonStyles.css";

//elements
import CarouselComp from "../ProductElements/CarouselComp";
import ProductInfo from "../ProductElements/ProductInfo";
import PricingComp from "../CartElements/PricingComp";
import RangerComp from "../CartElements/RangerComp";
import AddToCartBtn from "../CartElements/AddToCartBtn";
import ModalCont from "../Modal/ModalCont";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <TertiaryDiv>
          {/* Carousel component */}
          <CarouselComp />
        </TertiaryDiv>

        <TertiaryDiv>
          <InfoDiv>
            {/* Product info and pricing*/}
            <ProductInfo />
            <PricingComp />

            {/* ranger and add to cart*/}
            <Controls>
              <RangerComp />
              <AddToCartBtn />
            </Controls>

            {/* Modal component */}
            <ModalCont />

            {/* closing tags */}
          </InfoDiv>
        </TertiaryDiv>
      </SecondaryDiv>
    </PrimaryDiv>
  );
};

export default ProductDes;
