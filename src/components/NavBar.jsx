import { Box, Heading, Icon, Image } from "@chakra-ui/react";
import {FiMenu} from "react-icons/fi";
import {IoLanguage} from "react-icons/io5";
import Logo from "./../logo4.png";

const NavBar = () => {
  return (
    <Box
      filter="drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3))"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#868FC6"
      p="15px"
    >
      <Icon as={FiMenu} fontSize="1.8rem" />
      <Box d="flex" flexDir="row" alignItems="center" justifyContent="center" bg="rgba(255, 255, 255, 0.8)" borderRadius="100px" p=" 10px 30px">
        <Image src={Logo} w="35px" h="35px" />
        <Heading>App Name</Heading>
      </Box>
      <Icon as={IoLanguage} fontSize="1.8rem" />
    </Box>
  );
};

export default NavBar;
