import React from "react";
import {
  ProductPrice,
  StrikedPrice,
  Pricing,
} from "../../assets/styles/ProductDesStyles";
import { Badge, Box, Text } from "@chakra-ui/react";
import "../../assets/styles/buttonStyles.css";

interface PricingProps {
  actualPrice: string;
  discount: string;
  strikedPrice: string;
}

const Costing = ({ actualPrice, discount, strikedPrice }: PricingProps) => {
  return (
    <Pricing>
      <Box>
        <ProductPrice>{actualPrice}</ProductPrice>
        <Badge
          ml="4"
          mb="2"
          colorScheme="orange"
          color="#ff9100"
          fontSize="0.8em"
          px="2">
          {discount}
        </Badge>
      </Box>
      <Box>
        <StrikedPrice>
          <Text as="s">{strikedPrice}</Text>
        </StrikedPrice>
      </Box>
    </Pricing>
  );
};

function PricingComp() {
  return (
    <>
      <Costing
        actualPrice={"$125.00"}
        discount={"50%"}
        strikedPrice={"$250.00"}
      />
    </>
  );
}
export default PricingComp;
