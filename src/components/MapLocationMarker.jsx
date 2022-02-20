import {Box, Icon} from "@chakra-ui/react";
import {FaMapMarkerAlt} from "react-icons/fa";

const MapLocationMarker = ({lat, lng}) => {
    return (
        <Box lat={lat} lng={lng}>
            <Icon color="#F3483E" as={FaMapMarkerAlt} fontSize="2rem" />
        </Box>
    );
};

export default MapLocationMarker;