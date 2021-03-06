import React from "react";
import "../../assets/styles/buttonStyles.css";
import { VStack, Text, Button } from "@chakra-ui/react";

//imports
import {
  PrimaryDiv,
  SecondaryDiv,
  Image,
  ProductName,
} from "../../assets/styles/CartContentStyles";
import displayPic1 from "../../assets/images/image-product-1.jpg";

interface ProductInfoProps {
  productName: string;
}

const Product = ({ productName }: ProductInfoProps) => {
  return (
    <VStack alignItems={"flex-start"}>
      <ProductName>{productName}</ProductName>
      <Text>
        <span>$125.00 *</span>
        <span id="cartQuantity"></span> <b id="cartTotal"></b>
      </Text>
    </VStack>
  );
};

function ProductInfo() {
  return (
    <>
      <Product productName={"Fall Limited Edition Sneakers"} />
    </>
  );
}

const CartContent = () => {
  function DeleteEle() {
    let cont = document.getElementById("quantityId");
    let amount = document.getElementById("cartQuantity");
    let total = document.getElementById("cartTotal");
    let visi = document.getElementById("isvisible");
    let Tvisi = document.getElementById("textvisible");
    let badge = document.getElementById("cartBadge");

    let num, amt, ttl, bad: any;
    if (
      cont !== null &&
      amount !== null &&
      total !== null &&
      visi !== null &&
      Tvisi !== null &&
      badge !== null
    ) {
      num = parseInt(cont.innerText);
      num = 0;
      amt = parseInt(amount.innerText);
      amt = 0;
      ttl = parseInt(total.innerText);
      ttl = 0;
      bad = parseInt(total.innerText);
      bad = 0;
      visi.style.display = "none";
      badge.style.display = "none";
      Tvisi.style.display = "block";
      console.log("num, amt, ttl, bad", num, amt, ttl, bad);
    }
  }
  return (
    <PrimaryDiv>
      <SecondaryDiv>
        <Image src={displayPic1} alt="display img" />
        <ProductInfo />
        <svg
          width="14"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          onClick={DeleteEle}>
          <defs>
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a"
            />
          </defs>
          <use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" />
        </svg>
      </SecondaryDiv>

      <Button
        background="#ff7900"
        variant="solid"
        width="100%"
        className="checkoutBtn"
        mt={4}>
        <Text color="white">Checkout</Text>
      </Button>
    </PrimaryDiv>
  );
};

export default CartContent;
