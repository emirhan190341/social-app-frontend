import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { mode } from "@chakra-ui/theme-tools";
import "./index.css";
import { RecoilRoot } from "recoil";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#101010")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    dark: "#1e1e1e",
    light: "#616161",
  },
};

const theme = extendTheme({ colors, config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </RecoilRoot>
);
