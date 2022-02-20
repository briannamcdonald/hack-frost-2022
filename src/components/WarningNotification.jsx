import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import NavBar from "./NavBar";
import { AiOutlineSearch } from "react-icons/ai";
import WarningPopup from "./WarningPopup";

const WarningNotification = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 8.5,
  };

  const mapData = [
    {
      lat: 30.02419,
      lng: 31.47016,
      number: 200,
      size: "medium",
    },
  ];

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        height="92vh"
        alignItems="center"
        justifyContent="center"
        bg="rgba(0, 0, 0, 0.6)"
        zIndex="99"
      >
        <GoogleMapReact
          options={{
            zoomControl: false,
            scaleControl: false,
            fullscreenControl: false,
            minZoom: 6.5 - 1,
            maxZoom: 8.5 + 1,
          }}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{
            lat: 30.04458,
            lng: 31.24186,
          }}
        >
          {mapData.map((el, i) => (
            <MapMarker
              key={i + 1}
              lat={el.lat}
              lng={el.lng}
              number={el.number}
              size={el.size}
            />
          ))}
        </GoogleMapReact>
        <Box position="absolute" top="0" w="100%" p="100px 10px 0 10px">
          <InputGroup>
            <Input
              filter="drop-shadow(4px 4px 22px rgba(0, 0, 0, 0.2))"
              placeholder="Search"
              bg="white"
              fontSize="1.25rem"
              p="20px"
              pl="40px"
            />
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch fontSize="1.25rem" />}
            />
          </InputGroup>
          <WarningPopup />
        </Box>
      </Box>
    </Box>
  );
};

export default WarningNotification;