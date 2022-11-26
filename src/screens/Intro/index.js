
//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper';


const splash = require('./titleScreen.png')
const banner = require('./titleBanner.png')

function Intro({ navigation }) {
  const theme = useTheme();



  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
       <Image style={styles.banner} source={banner}/>
       <Image style={styles.splashImage} source={splash}/>
       <Button style={styles.startButton} mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Loading"))}>START</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage:{
    height: '60%',
    resizeMethod: 'scale',
    resizeMode: 'contain',

  },
  startButton:{
    marginTop: 10,
  },
  banner:{
    width: '100%',
    resizeMethod: 'scale',
    resizeMode: 'contain',
  }
});

export default Intro;


