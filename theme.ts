import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "Hind, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)",
      },
    },
  },
  colors: {
    font: "#EDF2F7",
    // primary: "#F4A5A5",
    // secondary: "#202020",
    // tertiary: "#444",
    // font: theme.colors.black,
    // bg: "#eee",
    // bgSecondary: "#75CED4",
    // bgContactMe: "#fff",
    // button: "rgba(255,111,111,0.95)",
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
