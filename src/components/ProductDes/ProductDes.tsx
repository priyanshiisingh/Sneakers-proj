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
import {
  RangerComp,
  AddToCartBtn,
  PricingComp,
} from "../ProductSelection/ProductSelection";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        {/* Carousel component */}
        <CarouselComp />

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

            {/* closing tags */}
          </InfoDiv>
        </TertiaryDiv>
      </SecondaryDiv>
    </PrimaryDiv>
  );
};

export default ProductDes;
