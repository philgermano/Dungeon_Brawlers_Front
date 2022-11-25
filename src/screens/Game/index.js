//Will contain the actual game screen.
//On defeat or victory player is either pushed to a results screen or results are a modal.

//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.


import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button} from 'react-native-paper'
function Game({ navigation }) {




  return (
    <View style={styles.container}>
    <View style={styles.gameImage}>
      <Text>Image</Text>
      </View>
      <View style={styles.gameText}>
    <ScrollView>
      <Text>TEXT</Text>
      <Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text>
      </ScrollView>  
      </View>
    <View style={styles.controlPanel}>
      <View style={styles.buttonRow}>
      <Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#1 </Button><Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#2 </Button><Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#3 </Button>
      </View>
      <View style={styles.buttonRow}>
      <Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#4 </Button><Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#5 </Button><Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#6 </Button>
      </View>
      <View style={styles.buttonRow}>
      <Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#7 </Button><Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#8 </Button><Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>#9 </Button>
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
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 3,
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
  }
  
});

export default Game;