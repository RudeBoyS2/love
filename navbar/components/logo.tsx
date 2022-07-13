import React from "react";
import {Box, Heading} from "@chakra-ui/react";

function Logo() {
  return (
    <Box alignItems={"center"} opacity={0.9}>
      <Heading
        alignItems={"center"}
        color="#eee"
        display={"flex"}
        textShadow="-2px 2px 2px rgba(1,1,1,0.7)"
      >
        L
        <span
          style={{
            color: "red",
            fontSize: 42,
            position: "relative",
            top: 3,
          }}
        >
          ♥
        </span>
        VE
      </Heading>
      {/* 
      <Heading size={"sm"}>OFERTAS ONLINE</Heading> */}
    </Box>
  );
}

export default Logo;
