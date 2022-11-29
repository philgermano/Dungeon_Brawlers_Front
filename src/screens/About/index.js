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
      <Text></Text>
      <Text>Project Details</Text>
      <Text></Text>
      <Text>React-Native, Node.js, Express, MongoDB, JavaScript </Text>
      <Text></Text>
      <Text>React-Native-Navigation for routing</Text>
      <Text></Text>
      <Text>Auth0 for user authentication</Text>
      <Text></Text>
      <Text>This game was built in the style of an old school dungeon crawler. The dungeon is built out of a series of individual rooms.</Text>
      <Text></Text>
      <Text>The opponent moves through the dungeon searching for you and will attack once you meet.</Text>
      <Text></Text>

      <Button style={styles.button}  color='#F5DF68' mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Intro"))}>Back</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding:25
  },
  button:{
    marginTop:15,
    position:'absolute',
    bottom:'10%'
  },
});

export default About;