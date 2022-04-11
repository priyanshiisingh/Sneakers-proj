import React from "react";
import {
  PrimaryDiv,
  SecondaryDiv,
  TertiaryDiv,
  ColouredHeader,
  ProductName,
  ProductDescription,
  InfoDiv,
} from "../../assets/styles/ProductDesStyles";
import { Box } from "@chakra-ui/react";
import Carousel from "../Carousels/Carousel";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <TertiaryDiv>
          <Box width={"50%"}>
            <Carousel />
          </Box>
        </TertiaryDiv>

        <TertiaryDiv>
          <InfoDiv>
            <ColouredHeader>SNEAKER COMPANY</ColouredHeader>
            <ProductName>Fall Limited Edition Sneakers</ProductName>
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
