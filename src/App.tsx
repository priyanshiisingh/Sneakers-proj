import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Navbar/Navbar";
import ProductDes from "./components/ProductDes/ProductDes";

export const App = () => (
  <ChakraProvider>
    <Nav />
    <ProductDes />
  </ChakraProvider>
);
