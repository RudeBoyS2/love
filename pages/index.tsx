import React from "react";
import {Flex, Heading, Button} from "@chakra-ui/react";

const index: React.FC = () => {
  return (
    <Flex align="center" h="100%" justify="center" w="100%">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          height: "100%",
        }}
      >
        <source
          src="https://res.cloudinary.com/dxgrn0qtx/video/upload/q_100/v1657670541/production_ID_4620480_qtj4ml.webm"
          type="video/webm"
        />
      </video>
      <Flex align="center" direction="column" height="100%" justify="center" width="100%">
        <Heading
          color="font"
          fontFamily="body"
          fontSize={{base: "30px", sm: "45px"}}
          fontWeight="300"
        >
          Los Mejores Accesorios
        </Heading>
        <Heading
          color="font"
          fontFamily="body"
          fontSize={{base: "30px", sm: "45px"}}
          fontWeight="300"
        >
          Encontralos Acá
        </Heading>
        <Button mt={6}>Productos</Button>
      </Flex>
    </Flex>
  );
};

export default index;
