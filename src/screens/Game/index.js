//Will contain the actual game screen.
//On defeat or victory player is either pushed to a results screen or results are a modal.

//Intro splash screen. just start button, a splash image, and the title.
//clicking start will push to loading screen.

// larger splash image
//butons low
//combine select and intro screen
//banner still on top

import React, {useState, useContext, useEffect, useRef} from "react";
import { View, Text, Image, StyleSheet, ScrollView, Modal, FlatList } from "react-native";
import { StackActions } from "@react-navigation/native";
import {Button, useTheme, ProgressBar} from 'react-native-paper';
import { GameContext } from "../../context/GameContext";

function Game({ navigation }) {
  const roomList = require('../../resources/roomList.js')
  const theme = useTheme();
  const { playerRoom, setPlayerRoom, enemyRoom, setEnemyRoom, playerHealth, setPlayerHealth, enemyHealth, setEnemyHealth} = useContext(GameContext);

  const flatListRef = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const [hpBar, setHpBar] = useState(1);
  const [roomImage, setRoomImage]= useState(room1);
  const [messageLog, setMessageLog] = useState([])

  const room1 = require(`./images/turn1.png`);
  const room2 = require(`./images/hallway1.png`);
  const room3 = require(`./images/turn2.png`);
  const room4 = require(`./images/hallway2.png`);
  const room5 = require(`./images/intersection.png`);
  const room6 = require(`./images/hallway3.png`);
  const room7 = require(`./images/turn3.png`);
  const room8 = require(`./images/hallway4.png`);
  const room9 = require(`./images/turn4.png`);
  const room10 = require(`./images/hallway5.png`);
  const room11 = require(`./images/turn5.png`);
  const room12 = require(`./images/hallway6.png`);
  const room13 = require(`./images/hallway7.png`);
  const room14 = require(`./images/turn6.png`);
  const room15 = require(`./images/hallway8.png`);
  const enemyImage = require('./images/enemySilhouette.png')




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

                  case 6:
                    setRoomImage(room6);
                    break;    
      
                    case 7:
                      setRoomImage(room7);
                      break;
      
                      case 8:
                        setRoomImage(room8);
                        break;

                        case 9:
                          setRoomImage(room9);
                          break;    
            
                          case 10:
                            setRoomImage(room10);
                            break;
            
                            case 11:
                              setRoomImage(room11);
                              break;
                              case 12:
                                setRoomImage(room12);
                                break;    
                  
                                case 13:
                                  setRoomImage(room13);
                                  break;
                  
                                  case 14:
                                    setRoomImage(room14);
                                    break;
                                    case 15:
                                      setRoomImage(room15);
                                      break;
                  case 0:
                    setRoomImage(room3);
                    break;   

      }

  }

  const hpCalc =() =>{
    let hpPercent = playerHealth/10;
    setHpBar(hpPercent)
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

const sword = () =>{
  console.log('SWING')
          //if enemy is in room. roll to hit enemy. if successful. hit enemy. and minus their health. add to combat logs as 

}
      //this format is used for adding onto chat log for combat
const addOntoLog = (message) => {
  setMessageLog(oldArray => [...oldArray, `${message}`]);
};


  return (
// ROOM IMAGE AND ENEMY IMAGE
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <View style={styles.gameImage}>
                  <Image style={styles.image} source={roomImage}/>
                  {playerRoom === enemyRoom ? <Image style={styles.enemyImage} source={enemyImage}/>: ''}
                  </View>
{/* TEXT BOX, HEALTH, AND LOG */}
      <View style={[styles.gameText, { backgroundColor: theme.colors.background }]}>
                          <View>
                          <ProgressBar style={styles.bar} progress={hpBar} color={'#880808'} />
                          <Text style={styles.barText}>Health</Text>
                          </View>
          
                  <FlatList
                        ListHeaderComponent={
                          <>
                        <Text>{roomList.default[playerRoom].description}</Text>
                        <Text>{playerRoom === enemyRoom ? 'The enemy is in this room' : ''}</Text>
                          </>}
                        data={messageLog}
                        renderItem={({item})=><Text>{item}</Text>}
                        keyExtractor={(item) => item.id}
                        ref={flatListRef}
            onContentSizeChange={()=> flatListRef.current.scrollToEnd()}
                        />
                        </View>
{/* CONTROL PAD                         */}
{/* ROW 1 */}
    <View style={[styles.controlPanel, { backgroundColor: theme.colors.background }]}>
            <View style={styles.buttonRow}>
                <Button  mode="contained"  onPress={()=>setMessageLog([])} style={styles.button}>👁️‍🗨️ </Button>
                    <Button disabled={roomList.default[playerRoom].north ? false:true}  mode="contained" onPress={()=>upArrow()} style={styles.button}>▲ </Button>
                      <Button   mode="contained" onPress={()=>hpCalc()} style={styles.button}>HP </Button>
            </View>
{/* ROW 2 */}
      <View style={styles.buttonRow}>
           <Button  disabled={roomList.default[playerRoom].west ? false:true} mode="contained" onPress={()=>LeftArrow()} style={styles.button}>◀</Button>
                  <Button  mode="contained" onPress={()=>{
                    addOntoLog('howdy');
                  }} style={styles.button}>Log </Button>
                           <Button  disabled={roomList.default[playerRoom].east ? false:true} mode="contained" onPress={()=>rightArrow()} style={styles.button}>▶</Button>
      </View>
{/* ROW 3 */}
      <View style={styles.buttonRow}>
            <Button  mode="contained" onPress={()=>sword()} style={styles.button}>⚔ </Button>
                    <Button  mode="contained" disabled={roomList.default[playerRoom].south ? false:true} onPress={()=>downArrow()} style={styles.button}>▼</Button>
                          <Button   mode="contained" onPress={()=>console.log('pressed')} style={styles.button}>⁀➴</Button>
      </View>
      </View>

{/* BOTTOM MENU BAR */}
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
  enemyImage: {
    width: '100%',
    height: '60%',
    resizeMethod: 'scale',
    resizeMode: 'contain',
    position:'absolute',
    bottom:30,
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
  bar:{
    height: 20,
    width:'80%',
    alignSelf: 'center',
    marginTop: 1,
  },
  barText:{
    position: 'absolute',
    alignSelf: 'center',

  }
  
});

export default Game;