import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Navbar/Navbar";

export const App = () => (
  <ChakraProvider>
    <Nav />
  </ChakraProvider>
);
