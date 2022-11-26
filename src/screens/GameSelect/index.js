//Will contain new game or Continue saved game button
//pull save data on loading component. use useEffect so that you toggle a variable when they save a new game so it knows to pull new data when player reloads component. If no data disable the button.

// new game just goes to game with base values.

//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet} from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper'

function GameSelect({ navigation }) {
  const theme = useTheme();



  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <Text>Game SElect</Text>
      <Button mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Game"))}>New Game</Button>
      <Button mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Game"))}>Load </Button>

      
      <Button mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("MainMenu"))}>Back</Button>

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

export default GameSelect;