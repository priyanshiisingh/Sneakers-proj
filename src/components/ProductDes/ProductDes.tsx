import React from "react";
import { PrimaryDiv, SecondaryDiv } from "../../assets/styles/ProductDesStyles";
import { Box } from "@chakra-ui/react";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <Box width={"50%"}>Product Image</Box>
        <Box width={"50%"}>Product Description</Box>
      </SecondaryDiv>
    </PrimaryDiv>
  );
};

export default ProductDes;
