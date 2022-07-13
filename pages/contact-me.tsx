import React, {useState} from "react";
import {
  Flex,
  Grid,
  Text,
  useTheme,
  FormControl,
  Input,
  Button,
  Textarea,
  useColorMode,
  Box,
  Heading,
} from "@chakra-ui/react";
import {AiFillPhone, AiFillInstagram, AiTwotoneCalendar} from "react-icons/ai";
import {IoCalendarNumberSharp} from "react-icons/io5";

const AboutUs: React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  React.useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <>
      <Flex
        bg="bgSecondary"
        justifyContent="center"
        minHeight="100vh"
        position="relative"
        zIndex={1}
      >
        <Flex
          bg="primary"
          boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}
          direction={{base: "column", sm: "row"}}
          justifyContent="space-between"
          mx={2}
          my={{base: 20, lg: 20}}
        >
          <Flex align="center" direction="column" height="100%" justify="center">
            <Heading>SOBRE NOSOTROS</Heading>
            <Text>Podes encontrarnos en Hipólito Irigoyen 1951</Text>
            <Text>lorem lorem lorem ipsum ipsum ipsum dea</Text>
          </Flex>
          <Flex height="500px" width="100%">
            <iframe
              allowFullScreen={true}
              frameBorder="0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.99694813242!2d-58.826514911924015!3d-27.46963940902286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b5e349b383b%3A0x481ea4b35f0aeb9c!2sHip%C3%B3lito%20Yrigoyen%201951%2C%20W3400%20ATP%2C%20Corrientes!5e0!3m2!1ses-419!2sar!4v1657735542277!5m2!1ses-419!2sar"
              style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}
              width="100%"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AboutUs;
