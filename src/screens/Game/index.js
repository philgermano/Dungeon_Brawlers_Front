//Will contain the actual game screen.
//On defeat or victory player is either pushed to a results screen or results are a modal.

//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";

function Game({ navigation }) {




  return (
    <View style={styles.container}>
      
      <Text>Game</Text>

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

export default Game;