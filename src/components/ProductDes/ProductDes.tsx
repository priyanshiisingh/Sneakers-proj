import React from "react";
import {
  PrimaryDiv,
  SecondaryDiv,
  TertiaryDiv,
  ColouredHeader,
  ProductName,
  ProductDescription,
  InfoDiv,
  CraouselDiv,
} from "../../assets/styles/ProductDesStyles";
import Carousel from "../Carousels/Carousel";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <TertiaryDiv>
          <CraouselDiv>
            <Carousel />
          </CraouselDiv>
        </TertiaryDiv>

        <TertiaryDiv>
          <InfoDiv>
            <ColouredHeader>SNEAKER COMPANY</ColouredHeader>
            <ProductName>
              Fall Limited Edition <br />
              Sneakers
            </ProductName>
            <ProductDescription>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer
            </ProductDescription>
          </InfoDiv>
        </TertiaryDiv>
      </SecondaryDiv>
    </PrimaryDiv>
  );
};

export default ProductDes;
