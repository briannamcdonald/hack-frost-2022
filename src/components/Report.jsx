import {
  Box,
  Input,
  Text,
  Button,
  Heading,
  Checkbox,
  Select,
  Textarea,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import GoogleMapReact from "google-map-react";
import MapLocationMarker from "./MapLocationMarker";

const Report = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 18,
  };

  return (
    <Box w="100vw" h="100vh" bg="#eee">
      <NavBar />
      <Box d="flex" flexDir="column" gap="18px" p="20px">
        <Box d="flex" flexDir="column" gap="8px">
          <Heading alignSelf="center" fontSize="1.5rem">
            Make an Anonymous Report
          </Heading>
          <Text fontSize="1.25rem" fontWeight="500">
            Street
          </Text>
          <Input boxShadow="base" bg="white" value="El Tahrir" />
        </Box>
        <Box d="flex" flexDir="column" gap="8px">
          <Text fontSize="1.25rem" fontWeight="500">
            City / Town
          </Text>
          <Input boxShadow="base" bg="white" value="Cairo" />
        </Box>
        <Box d="flex" flexDir="column" gap="4px">
          <Box d="flex" gap="8px">
            <Checkbox defaultChecked size="lg" colorScheme="blackAlpha" />
            <Text fontSize="1.25rem" fontWeight="500">
              It happened here
            </Text>
          </Box>
          <Box
            width="100%"
            height="200px"
            alignItems="center"
            justifyContent="center"
            boxShadow="base"
          >
            <GoogleMapReact
              options={{
                zoomControl: false,
                scaleControl: false,
                fullscreenControl: false,
                minZoom: 6.5 - 1,
                maxZoom: 18.5 + 1,
              }}
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              center={{
                lat: 30.04458,
                lng: 31.24010,
              }}
            >
              <MapLocationMarker lat="30.04495" lng="31.23956" />
            </GoogleMapReact>
          </Box>
        </Box>
        <Box d="flex" flexDir="column" gap="8px">
          <Text fontSize="1.25rem" fontWeight="500">
            Type of Report
          </Text>
          <Select boxShadow="base" bg="white" placeholder="Harassment"></Select>
        </Box>
        <Box d="flex" flexDir="column" gap="8px">
          <Text fontSize="1.25rem" fontWeight="500">
            Description
          </Text>
          <Textarea
            boxShadow="base"
            bg="white"
            placeholder="If you feel comfortable with it, describe what happened."
          />
        </Box>
        <Button
          color="white"
          fontSize="1.25rem"
          fontWeight="bold"
          w="90vw"
          bg="#868FC6"
          position="absolute"
          bottom="20px"
          left="20px"
          right="20px"
          size="md"
          boxShadow="base"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Report;
