import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { UL, LI, Link } from "../../assets/styles/DrawerStyles";
import "../../assets/styles/buttonStyles.css";
import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerComp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant="unstyled" className="hbtn">
        <HamburgerIcon w={6} h={6} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton className="cbtn" variant="unstyled" size="lg" />

          <DrawerBody mt={12}>
            <Stack direction={"column"} spacing={6}>
              <UL>
                <LI>
                  <Link href="">Collections</Link>
                </LI>
                <LI>
                  <Link href="">Men</Link>
                </LI>
                <LI>
                  <Link href="">Women</Link>
                </LI>
                <LI>
                  <Link href="">About</Link>
                </LI>
                <LI>
                  <Link href="">Contact</Link>
                </LI>
              </UL>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerComp;
