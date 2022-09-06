import React from "react";
import {Flex, Heading, chakra, useColorMode} from "@chakra-ui/react";
import {motion} from "framer-motion";

// const MotionButton = chakra(motion.div, {
//   shouldForwardProp: isValidMotionProp,
// });

const litShadow = `0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem #f51818,
0 0 0.8rem #f51818,
0 0 2.8rem #f51818,
inset 0 0 1.3rem #f51818`;

const offShadow = `0 0 0 #fff,
0 0 0 #fff,
0 0 0 #f51818,
0 0 0 #f51818,
0 0 0 #f51818,
inset 0 0 0 #f51818`;

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
0 0 0px #f5426c,
0 0 0px #f5426c,
0 0 0px #f5426c,
0 0 0px #f5426c,
0 0 0px #f5426c`;

const Index: React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  React.useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, []);

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
        {/* <MotionButton
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
              0 0 2rem #f51818,
              0 0 0.8rem #f51818,
              0 0 2.8rem #f51818,
              inset 0 0 1.3rem #f51818`}
          color="font"
          cursor="pointer"
          mt={6}
          px={5}
          py={2}
          textShadow={`0 0 3px #fff,
            0 0 10px #fff,
          0 0 21px #fff,
            0 0 42px #f5426c,
            0 0 82px #f5426c,
            0 0 92px #f5426c,
            0 0 102px #f5426c,
            0 0 151px #f5426c`}
        >
          Ver Productos
        </MotionButton> */}
      </Flex>
    </Flex>
  );
};

export default Index;
