import React, { useState, useEffect, useContext } from "react";
import {  REACT_APP_BACKEND_URL } from '@env';

import { AuthContext } from "./AuthContext";

const GameContext = React.createContext();

const GameContextProvider = (props) => {

  const { logout, loggedIn, userData} = useContext(AuthContext);

  const [gameData, setGameData] = useState('hello');
  const [playerRoom, setPlayerRoom] = useState(1);
  const [enemyRoom, setenemyRoom] = useState(2);
  const [playerHealth, setPlayerHealth] = useState(34);
  const [checkSave, setCheckSave] = useState(null);

//send the current game details back to save the game progress
  const saveGame = () =>{
      try {       
        console.log('backend address', REACT_APP_BACKEND_URL)
    fetch(REACT_APP_BACKEND_URL,{
        method: 'POST',
        body: JSON.stringify({
            username: userData.nickname,
            email: userData.email,
            playerDet: { location:playerRoom, health:playerHealth},
            enemyDet: {location:enemyRoom},
        }),
        headers: {
            'Content-Type': 'application/json'
        }      
    }).then(res =>res.json())
    .then(resJson =>{
        console.log('username', userData.nickname)
        console.log(playerRoom)
        console.log(playerHealth)

    })
  } catch (err) {
    console.log("error logging out..", err);
  }
  }


  //get data for user instance of a game
  const getSaveData = async () => {
    fetch(REACT_APP_BACKEND_URL)
    .then(res =>{return res.json()})
    .then(json => setGameData(json))
    .then(console.log(gameData))
  };

// executed when game start screen opens happens
useEffect(() => {
  (async () => {
    try {
      if (loggedIn) {
        const data = await getRoomData();
        setRoomData(data);
      }
    } catch (err) {
      console.log("error logging in: ", err);
    }
  })();
}, [checkSave]);


//update the current saved data of the users game
  const updateSave = async () => {
    fetch(REACT_APP_BACKEND_URL, {
      method: 'PUT',
      body: JSON.stringify({
        username: user.username,
        playerLoc: playerRoom,
        enemyLoc: enemyRoom,
        playerHealth: playerHealth,
    }),
      headers:{
        'Content-Type': 'application/json'
      }
      }).then((res) => res.json())
  .then((data) => {
    //console.log("success", data);
    getSaveData()
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
    setenemyRoom,
    playerHealth, 
    setPlayerHealth,
    checkSave, 
    setCheckSave
  };

    

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };