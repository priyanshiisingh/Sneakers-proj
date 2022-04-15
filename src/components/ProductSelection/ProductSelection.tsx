import React from "react";
import "../../assets/styles/buttonStyles.css";
import { Text, Button, Badge, Box } from "@chakra-ui/react";

//ranger imports
import { Ranger, RangerSvg } from "../../assets/styles/ProductDesStyles";
//add to cart imports
import { ControlBtn } from "../../assets/styles/ProductDesStyles";
//pricing imports
import {
  ProductPrice,
  StrikedPrice,
  Pricing,
} from "../../assets/styles/ProductDesStyles";

//ranger code
interface RangerProps {
  quantity: number;
}

const RangerFunc = ({ quantity }: RangerProps) => {
  const [count, setCount] = React.useState(0);
  function addQuantity() {
    var total = count + 1;
    setCount(total);
  }

  function subQuantity() {
    var total = count - 1;
    setCount(total);
  }

  quantity = count;
  console.log("in func", quantity);

  return (
    <Ranger>
      <RangerSvg
        width="12"
        height="4"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={subQuantity}>
        <defs>
          <path
            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
            id="a"
          />
        </defs>
        <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a" />
      </RangerSvg>
      <Text id="quantityId">{quantity}</Text>
      <RangerSvg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={addQuantity}>
        <defs>
          <path
            d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
            id="b"
          />
        </defs>
        <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b" />
      </RangerSvg>
    </Ranger>
  );
};

function RangerComp() {
  return (
    <>
      <RangerFunc quantity={0} />
    </>
  );
}

//pricing comp code
interface PricingProps {
  actualPrice: number;
  discount: string;
  strikedPrice: string;
}

const Costing = ({ actualPrice, discount, strikedPrice }: PricingProps) => {
  return (
    <Pricing>
      <Box>
        <ProductPrice>${actualPrice.toFixed(2)}</ProductPrice>
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
      <Costing actualPrice={125} discount={"50%"} strikedPrice={"$250.00"} />
    </>
  );
}

//add to cart button
const AddToCartBtn = () => {
  const [num, setNum] = React.useState("");
  const [amt, setAmt] = React.useState("");
  const [final, setFinal] = React.useState("");

  function Submit() {
    let cont = document.getElementById("quantityId");
    let amount = document.getElementById("cartQuantity");
    let total = document.getElementById("cartTotal");

    console.log(cont);
    let val: any;
    let amo: any;
    let calc: any;
    if (cont !== null && amount !== null && total !== null) {
      val = parseInt(cont.innerText);
      amo = parseInt(amount.innerText);

      amo = val;
      calc = 125.0 * amo;

      amount.innerHTML = amo;
      total.innerText = `$${calc}`;

      setFinal(calc);
      setAmt(amo);
      setNum(val);
    } else {
      console.log("error");
    }
  }
  console.log("final", final);
  console.log("amt", amt);
  console.log("num", num);
  return (
    <ControlBtn>
      <Button
        background="#ff7900"
        variant="solid"
        width="100%"
        className="cartbtn"
        id="cartButton"
        onClick={Submit}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="white"
            fill-rule="nonzero"
          />
        </svg>

        <Text color="white" ml={2}>
          Add to cart
        </Text>
      </Button>
    </ControlBtn>
  );
};

//exports
export { AddToCartBtn, RangerComp, PricingComp };
