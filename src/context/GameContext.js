import React, { useState, useRef, useContext } from "react";
import {  REACT_APP_BACKEND_URL } from '@env';

import { AuthContext } from "./AuthContext";


const GameContext = React.createContext();

const GameContextProvider = (props) => {

  const { logout, loggedIn, userData} = useContext(AuthContext);
  const [gameData, setGameData] = useState({game:null});
  const [playerRoom, setPlayerRoom] = useState(1);
  const [enemyRoom, setEnemyRoom] = useState(3);
  const [playerHealth, setPlayerHealth] = useState(5);
  const [checkSave, setCheckSave] = useState(false);
  const [enemyHealth, setEnemyHealth] = useState(5)
  const [loadDefault, setLoadDefault] = useState(false);

  //enemy direction 0-4 for 4 cardinal directions.
  const enemyDirection = useRef(Math.round(Math.random() * 4))

//send the current game details back to save the game progress
  const saveGame = () =>{
            
        console.log('backend address', REACT_APP_BACKEND_URL)
        fetch(REACT_APP_BACKEND_URL,{
        method: 'POST',
        body: JSON.stringify({
            username: userData.nickname,
            email: userData.email,
            playerRoom:playerRoom , 
            playerHealth:playerHealth,
            enemyRoom:enemyRoom, 
            enemyHealth:enemyHealth,
        }),
        headers: {
            'Content-Type': 'application/json'
        }      
    }).then(res =>res.json())
    .then(resJson =>{
        // console.log('email', userData.email)
        // console.log(playerRoom)
        // console.log(playerHealth)

    })
   .catch (err=>console.log("error logging", err));
  
  }


  //get data for user instance of a game
  const getSaveData = async () => {
    await fetch(`${REACT_APP_BACKEND_URL}/${userData.email}`)
    .then(res =>{return res.json()})
    .then(json => setGameData(json))
    .then((data)=>{
      // console.log(gameData, "gamedata");
      // console.log(gameData.game, 'gamedata.game');
      // setPlayerHealth(gameData.game.playerHealth);
      // setPlayerRoom(gameData.game.playerRoom);
      // setEnemyHealth(gameData.game.enemyHealth);
      // setEnemyRoom(gameData.game.enemyRoom);
    })
  };

// executed when game start screen opens happens
// useEffect(() => {
//   (async () => {
//     try {
//       if (loggedIn) {
//         const data = await getRoomData();
//         setRoomData(data);
//       }
//     } catch (err) {
//       console.log("error logging in: ", err);
//     }
//   })();
// }, [checkSave]);


const loadDefaultStats=()=>{
  setPlayerHealth(5);
  setPlayerRoom(1);
  setEnemyHealth(5);
  setEnemyRoom(3);
}

//update the current saved data of the users game
  const updateSave = async () => {
    await fetch(`${REACT_APP_BACKEND_URL}/${userData.email}`, {
      method: 'PUT',
      body: JSON.stringify({
        username: userData.nickname,
            email: userData.email,
            playerRoom:playerRoom , 
            playerHealth:playerHealth,
            enemyRoom:enemyRoom, 
            enemyHealth:enemyHealth,
    }),
      headers:{
        'Content-Type': 'application/json'
      }
      }).then((res) => res.json())
  .then((data) => {
    //console.log("success", data);
    //getSaveData()
    })
}

  const clearSave = async () => {
    try {
      fetch(`${REACT_APP_BACKEND_URL}/${userData.email}`, {
        method: 'DELETE', 
    })
    } catch (err) {
      console.log("error logging out..", err);
    }
    setGameData(undefined);
  };

  const value = {
    saveGame,
    getSaveData,
    updateSave,
    clearSave,
    gameData,
    setGameData,
    playerRoom, 
    setPlayerRoom,
    enemyRoom, 
    setEnemyRoom,
    playerHealth, 
    setPlayerHealth,
    enemyHealth,
    setEnemyHealth,
    checkSave, 
    setCheckSave,
    setLoadDefault,
    loadDefault,
    loadDefaultStats,
    enemyDirection
  };

    

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };