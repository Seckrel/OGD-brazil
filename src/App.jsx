import "./App.css";
import Layout from "./Layout";
import {
  MantineProvider,
  ColorSchemeProvider,
  useMantineTheme,
} from "@mantine/core";
// import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      {console.log(colorScheme)}
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
