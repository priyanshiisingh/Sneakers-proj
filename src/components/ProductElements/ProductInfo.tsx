import React from "react";
import {
  ColouredHeader,
  ProductName,
  ProductDescription,
} from "../../assets/styles/ProductDesStyles";
import "../../assets/styles/buttonStyles.css";

interface ProductInfoProps {
  header: string;
  productName: string;
  productDes: string;
}

const Product = ({ header, productName, productDes }: ProductInfoProps) => {
  return (
    <>
      <ColouredHeader>{header}</ColouredHeader>
      <ProductName>{productName}</ProductName>
      <ProductDescription>{productDes}</ProductDescription>
    </>
  );
};

function ProductInfo() {
  return (
    <>
      <Product
        header={"SNEAKER COMPANY"}
        productName={"Fall Limited Edition Sneakers"}
        productDes={
          "These low- profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
        }
      />
    </>
  );
}

export default ProductInfo;
