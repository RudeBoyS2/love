import React from "react";
import {Text, Image, Container, Link, Flex, Divider} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <Container
        alignItems={{base: "start", md: "center"}}
        backgroundColor="bg"
        bottom={0}
        color="font"
        display="flex"
        flexDirection={{base: "row"}}
        justifyContent={{base: "center", md: "center"}}
        maxW="100%"
        position="fixed"
        textAlign={{base: "left", md: "center"}}
      >
        <Flex direction="column" width="100%">
          <Flex
            alignItems="center"
            flexDirection={{base: "column", md: "row"}}
            gap="2"
            height="50px"
            justifyContent="center"
            my={{base: "8", sm: "4"}}
            width="100%"
          >
            <Flex fontFamily="body" fontWeight={500} gap="1px" textAlign={"center"}>
              Copyright © {new Date().getFullYear()} - L<Text color="navbar">♥</Text>VE
            </Flex>
            <Flex position={{md: "absolute"}} right="6">
              <Link isExternal href={"https://www.instagram.com/lovecorrientes/"} marginX={2}>
                <Flex
                  alignItems="center"
                  backgroundColor="transparent"
                  borderRadius={9999}
                  height={8}
                  justifyContent={"center"}
                  opacity={1}
                  width={8}
                >
                  <Image src={"/assets/icons/instagram.svg"} />
                </Flex>
              </Link>
              <Link
                isExternal
                href={
                  "https://mail.google.com/mail/?view=cm&source=mailto&to=monicascampe@gmail.com"
                }
              >
                <Flex
                  alignItems="center"
                  backgroundColor="transparent"
                  borderRadius={9999}
                  height={8}
                  justifyContent="center"
                  opacity={0.8}
                  paddingBottom={0.5}
                  width={8}
                >
                  <Image src={"/assets/icons/envelope.svg"} />
                </Flex>
              </Link>
            </Flex>
            <Divider display={{base: "none", sm: "block"}} opacity="0.3" orientation="vertical" />
            <Text fontFamily="body" my={{base: "0", sm: "4"}} textAlign="center">
              Created by {"{ riskOfDev }"}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
