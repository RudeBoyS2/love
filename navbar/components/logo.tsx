import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";

const Logo: React.FC = () => {
  return (
    <Box alignItems={"center"} opacity={0.9}>
      <Heading
        alignItems={"center"}
        color="font"
        display={"flex"}
        textShadow="-2px 2px 2px rgba(1,1,1,0.7)"
      >
        L
        <Text color="secondary" fontSize="43px" position="relative" top="0">
          ♥
        </Text>
        VE
      </Heading>
      {/* 
      <Heading size={"sm"}>OFERTAS ONLINE</Heading> */}
    </Box>
  );
};

export default Logo;
