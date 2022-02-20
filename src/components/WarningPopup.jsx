import {
  Box,
  Text,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { MdReportProblem } from "react-icons/md";

const WarningPopup = () => {
  return (
    <Modal isOpen={true}>
      <ModalOverlay />
      <ModalContent
        bg="rgba(255, 255, 255, 0.9)"
        display="flex"
        flexDir="column"
        borderRadius="6px"
        mt="60%"
        w="350px"
        h="30vh"
        alignItems="center"
        justifyContent="center"
        p="20px"
      >
        <ModalCloseButton />
        <ModalBody>
          <Box
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Box
              d="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
              gap="5px"
            >
              <Icon as={MdReportProblem} fontSize="2.5rem" />
              <ModalHeader p="5px" fontSize="2rem" fontWeight="bold">
                Warning!
              </ModalHeader>
            </Box>
            <Box
              d="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="20px"
            >
              <Text textAlign="center" fontSize="1.25rem" fontWeight="bold">
                You are near an area that might be dangerous.
              </Text>
              <Button w="100px" bg="black" color="white">
                OK
              </Button>
            </Box>
          </Box>
          <Box
            h="35px"
            w="100%"
            bg="#F3483E"
            borderRadius="0 0 6px 6px"
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            ml="auto"
            mr="auto"
            w="350px"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WarningPopup;
