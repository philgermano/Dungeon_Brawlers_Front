
//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper';
import { GameContext } from "../../context/GameContext";


const splash = require('./titleScreen3.png')
const banner = require('./titleBanner.png')

function Intro({ navigation }) {
  const theme = useTheme();
  const {setCheckSave, checkSave, setLoadDefault, getSaveData, loadDefaultStats} = useContext(GameContext);


  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
       <Image style={styles.splashImage} source={splash}/>
       <Image style={styles.banner} source={banner}/>
       <View style={styles.buttonSet}>
       {/* <TouchableOpacity style={[styles.buttonPress, { backgroundColor: '#ee2244' }]}onPress={console.log('pressed')} activeOpacity={0.6}><Image style={styles.buttonImage} source={require('./startButton.png')}/></TouchableOpacity> */}

       {/* Cut the color if it doesn't look good. ask */}
       <Button style={styles.button} color='#F5DF68' mode="contained" onPress={()=>{
        loadDefaultStats();
        navigation.dispatch(StackActions.replace("Game"));
       }}>New Game</Button>
       <Button style={styles.button} color='#F5DF68' mode="contained" onPress={()=>{
        getSaveData();
        setCheckSave(true);
        setTimeout(()=>navigation.dispatch(StackActions.replace("Game")),500);
        }}>Load </Button>
       <Button  style={styles.button} color='#F5DF68' mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("About"))}>About</Button>
       <Button style={styles.button} color='#F5DF68' mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Account"))}>Profile</Button>
       </View>
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
    height: '100%',
    right: '-60%',
    resizeMethod: 'scale',
    resizeMode: 'contain',
    position: 'absolute'

  },
  buttonPress:{

    height: '10%',
    marginBottom:100,
  },
  button:{
    marginTop:15,
  },
  buttonImage:{
    width: 'auto',
    resizeMethod: 'scale',
    resizeMode: 'contain',
  },
  banner:{
    width: '100%',
    resizeMethod: 'scale',
    resizeMode: 'contain',
    marginTop: '30%'
  },
  buttonSet:{
    marginTop: '70%',
    width: '50%',
  }
});

export default Intro;


