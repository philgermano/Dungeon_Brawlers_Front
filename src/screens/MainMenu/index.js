//Has start, options, profile, and other options.
//Each button pushes to a screen for them.
//Help might be a modal instead of a different screen.
//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper';


function MainMenu({ navigation }) {
  const theme = useTheme();



  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <Text>MAinMEnu</Text>
      <Button style={styles.button} mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("GameSelect"))}>Game</Button>
      <Button style={styles.button} mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("About"))}>About</Button>
      <Button style={styles.button} mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Account"))}>Profile</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    marginBottom: 10,
  },

});

export default MainMenu;