import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Hind, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#f5f2f2",
      },
    },
  },
  colors: {
    font: "#f2f2f2",
    secondary: "#858383",
    tertiary: "#141414",
    navbar: "#f51818",
    logo1: "#fff",
    logo2: "#fa0505",
    popover: "hsl(0 0% 100% / 0.1)",
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
