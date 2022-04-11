import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import ModalCarousel from "./ModalCarousel";

const ModalCont = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCarousel />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCont;
