
import * as React from "react";
import { AppRegistry } from "react-native";
import {DarkTheme, Provider as PaperProvider } from "react-native-paper";

import App from "./App";
import { name as appName } from "./app.json";

const theme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: '#2d3436',
        accent: '#1C1C1C',
        background : '#636e72'
      }
    };

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);