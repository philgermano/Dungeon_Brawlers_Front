
import React, {useContext, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper';
import { GameContext } from "../../context/GameContext";

import { AuthContext } from "../../context/AuthContext";

const splash = require('./victoryScreen.png')
const banner = require('./victoryBanner.png')

function Victory({ navigation }) {
  const theme = useTheme();
  const {clearSave} = useContext(GameContext);


  useEffect(() => {
    clearSave();

}, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
    <Image style={styles.splashImage} source={splash}/>
    <Image style={styles.banner} source={banner}/>
    <Button style={styles.button} color='#F5DF68' mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Intro"))}>Main Menu</Button>
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
      height: '90%',
      right: '-80%',
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
      position:'absolute',
      bottom:'10%'
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
      top: '10%',
      position: 'absolute',
    },
    buttonSet:{
      marginTop: '70%',
      width: '50%',
    }
  });

export default Victory;