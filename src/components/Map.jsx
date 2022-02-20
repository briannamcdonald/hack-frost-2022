import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import NavBar from "./NavBar";
import { AiOutlineSearch } from "react-icons/ai";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 8.5,
  };

  const zoomedInMapData = [
    {
      lat: 30.061680,
      lng: 31.223780,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.060780,
      lng: 31.223780,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.061260,
      lng: 31.222970,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.062740,
      lng: 31.223390,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.062950,
      lng: 31.221460,
      number: 3,
      size: "xs",
    },
    {
      lat: 30.062110,
      lng: 31.221060,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.060010,
      lng: 31.22319,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.059590,
      lng: 31.224500,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.060090,
      lng: 31.222070,
      number: 2,
      size: "xs",
    },
    {
      lat: 30.060850,
      lng: 31.221000,
      number: 3,
      size: "xs",
    },
    {
      lat: 30.057330,
      lng: 31.222760,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.058690,
      lng: 31.221470,
      number: "",
      size: "xxs",
    },
    {
      lat: 30.058620,
      lng: 31.220600,
      number: 2,
      size: "xs",
    },
  ]

  const zoomedOutMapData = [
    {
      lat: 30.10498,
      lng: 31.31838,
      number: 179,
      size: "medium",
    },
    {
      lat: 29.99796,
      lng: 31.20838,
      number: 154,
      size: "medium",
    },
    {
      lat: 30.07668,
      lng: 30.95,
      number: 9,
      size: "xs",
    },
    {
      lat: 30.17498,
      lng: 31.24838,
      number: 45,
      size: "small",
    },
    {
      lat: 30.21498,
      lng: 31.29838,
      number: 12,
      size: "xs",
    },
    {
      lat: 29.89796,
      lng: 31.28838,
      number: 18,
      size: "xs",
    },
    {
      lat: 30.05396,
      lng: 31.07555,
      number: 28,
      size: "xs",
    },
    {
      lat: 30.11498,
      lng: 31.16838,
      number: 806,
      size: "large",
    },
    {
      lat: 29.9992,
      lng: 30.89917,
      number: 12,
      size: "xs",
    },
  ];

  const options = {
    zoomControl: false,
    scaleControl: false,
    fullscreenControl: false,
    minZoom: 3.5 - 1,
    maxZoom: 20.5 + 1,
  };

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        height="92vh"
        alignItems="center"
        justifyContent="center"
      >
        <GoogleMapReact
          options={options}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{
            lat: 30.04458,
            lng: 31.24186,
          }}
        >
          {zoomedOutMapData.map((el, i) => (
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
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
