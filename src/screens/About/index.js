///Will Be a page about the project and with my details.


//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { StackActions, CommonActions, HeaderBackButton } from "@react-navigation/native";

import {Button, useTheme} from 'react-native-paper';

function About({ navigation }) {
  const theme = useTheme();



  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <Text>About</Text>
      <Button mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Intro"))}>Back</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default About;