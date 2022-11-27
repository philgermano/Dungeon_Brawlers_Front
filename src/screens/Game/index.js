//Will contain the actual game screen.
//On defeat or victory player is either pushed to a results screen or results are a modal.

//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.

// larger splash image
//butons low
//combine select and intro screen
//banner still on top

import React, {useState, useContext, useEffect, useCallback} from "react";
import { View, Text, Image, StyleSheet, ScrollView, Modal } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme} from 'react-native-paper';
import { GameContext } from "../../context/GameContext";

function Game({ navigation }) {
  const roomList = require('../../resources/roomList.js')
  const theme = useTheme();
  const { playerRoom, setPlayerRoom, enemyRoom, setenemyRoom, playerHealth, setPlayerHealth} = useContext(GameContext);

  const [modalVisible, setModalVisible] = useState(false);
  
  
  const room1 = require(`./images/hallway1.png`);
  const room2 = require(`./images/intersection.png`);
  const room3 = require(`./images/hallway2.png`);
  const room4 = require(`./images/hallway3.png`);
  const room5 = require(`./images/hallway3.png`);

  const [roomImage, setRoomImage]= useState(room1);

  //sets initial player room image on load
  useEffect(() => {
    imageSelector(playerRoom);
  }, [playerRoom]);


  const imageSelector = () =>{
      switch(playerRoom){
        case 1:
          setRoomImage(room1);
          break;

          case 2:
            setRoomImage(room2);
            break;
            
            case 3:
              setRoomImage(room3);
              break;    

              case 4:
                setRoomImage(room4);
                break;

                case 5:
                  setRoomImage(room5);
                  break;
                  
                  case 0:
                    setRoomImage(room3);
                    break;   

      }

  }

const upArrow = ()=>{
setPlayerRoom(roomList.default[playerRoom].north);
}
const downArrow =(room)=>{
setPlayerRoom(roomList.default[playerRoom].south)
}
const LeftArrow = ()=>{
  setPlayerRoom(roomList.default[playerRoom].west);
  }
  const rightArrow =(room)=>{
  setPlayerRoom(roomList.default[playerRoom].east)
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
    <View style={styles.gameImage}>
            <Image style={styles.image} source={roomImage}/>
            </View>
      <View style={[styles.gameText, { backgroundColor: theme.colors.background }]}>
    <ScrollView>
      <Text>TEXT</Text>
      <Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text><Text>TEXT</Text>
      </ScrollView>  
      </View>
    <View style={[styles.controlPanel, { backgroundColor: theme.colors.background }]}>
      <View style={styles.buttonRow}>
          <Button mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↰ </Button>
              <Button  mode="contained" onPress={()=>upArrow()} style={styles.button}>↑ </Button>
                <Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>↱ </Button>
      </View>
      <View style={styles.buttonRow}>
           <Button  mode="contained" onPress={()=>LeftArrow()} style={styles.button}>← </Button>
                <Button  mode="contained" onPress={()=>downArrow()} style={styles.button}>↓ </Button>
                      <Button   mode="contained" onPress={()=>rightArrow()} style={styles.button}>→ </Button>
      </View>
      <View style={styles.buttonRow}>
            <Button  mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>⚔ </Button>
                    <Button  mode="contained" onPress={()=>imageSelector(playerRoom)} style={styles.button}>↨ </Button>
                          <Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>⁀➴</Button>
      </View>
      </View>
      <View style={[styles.bottomBar, { backgroundColor: theme.colors.background }]}>
      <View style={styles.centeredView}>
            <Modal
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={[styles.modalView, { backgroundColor: theme.colors.background }]}>
                  <Text style={styles.modalText}>Game Instructions</Text>
                  <Button mode="contained"
                    onPress={() => setModalVisible(!modalVisible)}>Hide</Button>
                </View>
              </View>
            </Modal>
            <Button style={styles.helpButton} mode="text" color='white' onPress={() => setModalVisible(true)}>Help</Button>
          </View>
          <Button Button style={styles.helpButton} mode="text" color='white' onPress={()=>navigation.dispatch(StackActions.replace("Intro"))}>Main Menu</Button>   
               <Button Button style={styles.helpButton} mode="text" color='white' onPress={()=>{
                console.log(roomList);
                imageSelector(2);
                console.log(roomList.default[1]);
                }}>Save</Button>  
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
    flex: 1.5,
    backgroundColor: 'red',
    borderColor: 'black',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    padding: 3,
  },
  controlPanel:{
    flex:1,
    //backgroundColor: 'green',
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
    flexDirection:'row',
    justifyContent: 'space-evenly'
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
    borderWidth: 0,
    borderColor: 'black',
    fontSize: ''
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'black',
    borderWidth:2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  helpButton:{
    textColor: 'white',
    flexBasis: 'auto',
    height: '100%',
  },

  
});

export default Game;