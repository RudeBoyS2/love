import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "Hind, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#f72863",
        //"linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)",
      },
    },
  },
  colors: {
    font: "#f5f7fa",
    secondary: "#f72863",
    // secondary: "#288ff7",
    // secondary: "#e228f7",
  },
  components: {
    Radio: {
      parts: ["label"],
      baseStyle: {
        label: {
          width: "100%",
        },
      },
    },
    Button: {
      baseStyle: {
        _focus: "",
      },
    },
  },
});
