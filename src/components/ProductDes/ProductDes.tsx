import React from "react";
import { PrimaryDiv, SecondaryDiv } from "../../assets/styles/ProductDesStyles";
import { Box } from "@chakra-ui/react";
import Carousel from "../Carousels/Carousel";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <Box width={"50%"}>
          Product Image
          <Carousel />
        </Box>
        <Box width={"50%"}>Product Description</Box>
      </SecondaryDiv>
    </PrimaryDiv>
  );
};

export default ProductDes;
