import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, withTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";

import { GameContext } from "../../context/GameContext";
import { AuthContext } from "../../context/AuthContext";

const CrudTest = ({ navigation, theme }) => {
  const { logout, loggedIn, userData} = useContext(AuthContext);

  const { gameData, CheckSave, setGameData, playerRoom, setPlayerRoom, enemyRoom, setenemyRoom, playerHealth, setPlayerHealth, checkSave, setCheckSave, saveGame, clearSave, getSaveData, updateSave  } = useContext(GameContext);
  const { colors } = theme;

  useEffect(() => {
    if (loggedIn === false) {
      navigation.dispatch(StackActions.replace("Login"));
    }
  }, [loggedIn]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

{userData && (
        <View style={styles.userContainer}>
          <Avatar.Image size={100} source={{ uri: userData.picture }} />
          <View style={styles.textContainer}>
            <Text>{userData.name}</Text>
          </View>
        </View>
      )}

      {gameData && (
        <View style={styles.userContainer}>
          <Text>{gameData.nickname}</Text>
          <Text>{gameData.playerLoc}</Text>
          <Text>{gameData.playerHealth}</Text>
        </View>
      )}
       <Button style={styles.button} mode="contained" onPress={() => setPlayerHealth(14)}>
        lower health value
        </Button>
      <Button style={styles.button} mode="contained" onPress={() => getSaveData()}>
        retreive save
      </Button>
      <Button style={styles.button} mode="contained" onPress={() => updateSave()}>
      updateSave
      </Button>
      <Button style={styles.button} mode="contained" onPress={() => clearSave()}>
        clearSave
      </Button>
      <Button style={styles.button} mode="contained" onPress={() => saveGame()}>
        saveGame
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 10
  },
  button: {
    marginBottom:10
  }
});

export default withTheme(CrudTest);