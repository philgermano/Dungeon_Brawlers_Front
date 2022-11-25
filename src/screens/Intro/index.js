
//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button} from 'react-native-paper';

function Intro({ navigation }) {




  return (
    <View style={styles.container}>
       <Text>Intro</Text>
       <Button mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Loading"))}>START</Button>

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

export default Intro;


