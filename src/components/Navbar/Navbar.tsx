import React from "react";
import { Flex, Avatar, Button, Stack } from "@chakra-ui/react";
import imageAvatar from "../../assets/images/image-avatar.png";
import { MainMenu } from "../Menu/Menu";
import DrawerComp from "../Drawer/Drawer";
import { Div, Box } from "../../assets/styles/NavbarStyles";

//elements
import CartDropDown from "../Cart/CartDropDown";

export default function Nav() {
  return (
    <>
      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"}>
            <Div>
              <DrawerComp />
            </Div>
            <MainMenu />
          </Stack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartDropDown />
              <Button
                rounded={"full"}
                variant="unstyled"
                className="cbtn"
                cursor={"pointer"}
                minW={0}>
                <Avatar size={"md"} src={imageAvatar} className="avatar" />
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
