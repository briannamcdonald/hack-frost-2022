import { Box, Button, Text, Icon } from "@chakra-ui/react";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import NavBar from "./NavBar";
import HomeButton from "./HomeButton";

const Home = () => {
  return (
    <Box h="100vh" w="100vw" bg="#eee">
      <NavBar />
      <Box
        h="80vh"
        alignItems="center"
        justifyContent="center"
        d="flex"
        p="20px"
        flexDir="column"
        gap="40px"
        alignItems="center"
      >
        <Box d="flex" flexDir="column" h="60vh" w="100%" gap="45px">
          <HomeButton icon={FaMapMarkerAlt} text="Safety Map" color="#50A254" />
          <HomeButton
            icon={MdReportProblem}
            text="Make a Report"
            color="#FCDD3D"
          />
          <HomeButton icon={IoCall} text="Emergency Call" color="#F3483E" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
