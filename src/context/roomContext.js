import React, { useState, useEffect } from "react";
import {  REACT_APP_BACKEND_URL } from '@env';


const RoomContext = React.createContext();

const RoomContextProvider = (props) => {

  const [gameData, setGameData] = useState(null);
  const [checkSave, setCheckSave] = useState(null);

//send the current game details back to save the game progress
  const saveGame = (event) =>{
         
    event.preventDefault()
    fetch('REACT_APP_BACKEND_URL',{
        method: 'POST',
        body: JSON.stringify({
            username: user.username,
            playerLoc: gameData.playerRoom,
            enemyLoc: gameData.enemyRoom,
            playerHealth: gameData.playerHealth,
        }),
        headers: {
            'Content-Type': 'application/json'
        }      
    }).then(res =>res.json())
    .then(resJson =>{
        //console.log('NewForm - resJson', resJson)
        //console.log(event,"event")
        //console.log("item ID", recipe_id)
    })
  }


  //get data for user instance of a game
  const getSaveData = async () => {
    fetch(REACT_APP_BACKEND_URL)
    .then(res =>{return res.json()})
    .then(json => setRoomData(json))
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
        playerLoc: gameData.playerRoom,
        enemyLoc: gameData.enemyRoom,
        playerHealth: gameData.playerHealth,
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
      fetch(REACT_APP_BACKEND_URL, {
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
  };

    

  return (
    <RoomContext.Provider value={value}>{props.children}</RoomContext.Provider>
  );
};

export { RoomContext, RoomContextProvider };