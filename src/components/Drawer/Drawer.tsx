import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { UL, LI, Link } from "../../assets/styles/DrawerStyles";
import "../../assets/styles/buttonStyles.css";

function DrawerComp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant="unstyled" className="hbtn">
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="cbtn" variant="unstyled" size="lg">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </DrawerCloseButton>

          <DrawerBody mt={10}>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerComp;
