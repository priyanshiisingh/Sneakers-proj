import React from "react";
import {
  PrimaryDiv,
  SecondaryDiv,
  TertiaryDiv,
  ColouredHeader,
  ProductName,
  ProductDescription,
  InfoDiv,
  CarouselDiv,
  ProductPrice,
  StrikedPrice,
  Pricing,
  Controls,
  Ranger,
  ControlBtn,
} from "../../assets/styles/ProductDesStyles";
import Carousel from "../Carousels/Carousel";
import MobCarousel from "../Carousels/MobCarousel";
import { Badge, Box, Text, Button } from "@chakra-ui/react";
import "../../assets/styles/buttonStyles.css";

const ProductDes = () => {
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <TertiaryDiv>
          <CarouselDiv>
            <div className="full">
              <Carousel />
            </div>
            <div className="mobile">
              <MobCarousel />
            </div>
          </CarouselDiv>
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
              everything the weather can offer.
            </ProductDescription>

            <Pricing>
              <Box>
                <ProductPrice>$125.00</ProductPrice>
                <Badge
                  ml="4"
                  mb="2"
                  colorScheme="orange"
                  color="#ff9100"
                  fontSize="0.8em"
                  px="2">
                  50%
                </Badge>
              </Box>
              <Box>
                <StrikedPrice>
                  <Text as="s">$250.00</Text>
                </StrikedPrice>
              </Box>
            </Pricing>

            <Controls>
              <Ranger>
                <Button className="cbtn">
                  <svg
                    width="12"
                    height="4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                        id="a"
                      />
                    </defs>
                    <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a" />
                  </svg>
                </Button>
                box
                <Button className="cbtn">
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                        id="b"
                      />
                    </defs>
                    <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b" />
                  </svg>
                </Button>
              </Ranger>
              <ControlBtn>
                <Button
                  background="#ff7900"
                  variant="solid"
                  width="100%"
                  className="cartbtn">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="white"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <Text color="white">Add to cart</Text>
                </Button>
              </ControlBtn>
            </Controls>
          </InfoDiv>
        </TertiaryDiv>
      </SecondaryDiv>
    </PrimaryDiv>
  );
};

export default ProductDes;
