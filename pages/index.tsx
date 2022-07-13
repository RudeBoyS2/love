import React from "react";
import {Flex, Heading, Button, chakra, isValidMotionProp} from "@chakra-ui/react";
import {motion} from "framer-motion";

const MotionButton = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

const litShadow = `0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem #bc13fe,
0 0 0.8rem #bc13fe,
0 0 2.8rem #bc13fe,
inset 0 0 1.3rem #bc13fe`;

const offShadow = `0 0 0 #fff,
0 0 0 #fff,
0 0 0 #bc13fe,
0 0 0 #bc13fe,
0 0 0 #bc13fe,
inset 0 0 0 #bc13fe`;

const litText = `0 0 3px #fff,
0 0 10px #fff,
0 0 21px #fff,
0 0 42px #0fa,
0 0 82px #0fa,
0 0 92px #0fa,
0 0 102px #0fa,
0 0 151px #0fa`;

const offText = `0 0 0px #fff,
0 0 0px #fff,
0 0 0px #fff,
0 0 0px #0fa,
0 0 0px #0fa,
0 0 0px #0fa,
0 0 0px #0fa,
0 0 0px #0fa`;

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
          filter: "blur(5px) brightness(0.5)",
        }}
      >
        <source
          src="https://res.cloudinary.com/dxgrn0qtx/video/upload/q_100/v1657670541/production_ID_4620480_qtj4ml.webm"
          type="video/webm"
        />
      </video>
      <Flex
        align="center"
        color="font"
        direction="column"
        height="100%"
        justify="center"
        textAlign="center"
        textTransform="uppercase"
        width="100%"
      >
        <Heading fontSize={{base: "25px", sm: "35px"}} fontWeight="300">
          Los Mejores Accesorios
        </Heading>
        <Heading fontSize={{base: "30px", sm: "40px"}} fontWeight="300">
          Encontralos Acá
        </Heading>
        <MotionButton
          animate={{
            textShadow: [
              litText,
              litText,
              offText,
              litText,
              offText,
              litText,
              litText,
              offText,
              litText,
              litText,
            ],
            boxShadow: [
              litShadow,
              litShadow,
              offShadow,
              litShadow,
              offShadow,
              litShadow,
              litShadow,
              offShadow,
              litShadow,
              litShadow,
            ],
            transition: {
              duration: 3,
              times: [0, 0.18, 0.2, 0.22, 0.24, 0.25, 0.53, 0.55, 0.57, 1],
            },
          }}
          background="none"
          boxShadow={`0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe,
              0 0 2.8rem #bc13fe,
              inset 0 0 1.3rem #bc13fe`}
          color="font"
          cursor="pointer"
          mt={6}
          px={5}
          py={2}
          textShadow={`0 0 3px #fff,
            0 0 10px #fff,
          0 0 21px #fff,
            0 0 42px #0fa,
            0 0 82px #0fa,
            0 0 92px #0fa,
            0 0 102px #0fa,
            0 0 151px #0fa`}
        >
          Ver Productos
        </MotionButton>
      </Flex>
    </Flex>
  );
};

export default index;
