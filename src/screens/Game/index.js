//Will contain the actual game screen.
//On defeat or victory player is either pushed to a results screen or results are a modal.

//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons';


function Game({ navigation }) {
  const theme = useTheme();
  const forNow = require('./images/hallway3.png');

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
    <View style={styles.gameImage}>
            <Image style={styles.image} source={forNow}/>
            </View>
      <View style={styles.gameText}>
    <ScrollView>
      <Text>TEXT</Text>
      <Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text>
      </ScrollView>  
      </View>
    <View style={styles.controlPanel}>
      <View style={styles.buttonRow}>
      <Button mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↰ </Button><Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↑ </Button><Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↱ </Button>
      </View>
      <View style={styles.buttonRow}>
      <Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>← </Button><Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↓ </Button><Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>→ </Button>
      </View>
      <View style={styles.buttonRow}>
      <Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>⚔ </Button><Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↨ </Button><Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>⁀➴</Button>
      </View>
      </View>
      <View style={styles.bottomBar}>
      <Text>BottomBar, MODAL for menu and help. sound?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameImage: {
    flex:3,
    //backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 3,
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMethod: 'scale',
    //resizeMode: 'contain',
  },
  gameText:{
    flex: 2,
    backgroundColor: 'red',
    borderColor: 'black',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    padding: 3,
  },
  controlPanel:{
    flex:1,
    backgroundColor: 'green',
    borderColor: 'black',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth:5,
    padding: 3,
  },
  bottomBar:{
    height:50,
    backgroundColor:'orange',
    borderColor: 'black',
    borderWidth: 5,
    padding: 3,
  },
  buttonRow:{
    flex:1,
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
  },
  button: {
    flexBasis: 'auto',
    height: '100%',
    flexGrow:1,
    flexShrink:1,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'blacks',
    fontSize: ''
  }
  
});

export default Game;