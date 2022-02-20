import { Box, Image, Text, Flex, Heading, Link } from "@chakra-ui/react";
import { BsGeoAlt } from "react-icons/bs";

function MapMarker({ lat, lng, number, size }) {
  const sizeData = {
    xxs: "25px",
    xs: "45px",
    small: "55px",
    medium: "75px",
    large: "100px",
    xl: "250px",
  };

  return (
    <Box lat={lat} lng={lng} position="absolute">
      <Box
        backgroundColor="rgba(200, 0, 0, 0.4)"
        borderWidth="2px"
        borderColor="rgba(200, 0, 0, 0.4)"
        h={sizeData[size]}
        w={sizeData[size]}
        lineHeight={sizeData[size]}
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Text fontWeight="bold" fontSize="2rem">
          {number}
        </Text>
      </Box>
    </Box>
  );
}

export default MapMarker;
