import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, useTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";
import { GameContext } from "../../context/GameContext";

const AccountScreen = ({ navigation }) => {
  const { logout, loggedIn, userData } = useContext(AuthContext);
  const {clearSave} = useContext(GameContext);

  const theme = useTheme();

  useEffect(() => {
    if (loggedIn === false) {
      navigation.dispatch(StackActions.replace("Login"));
    }
  }, [loggedIn]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {userData && (
        <View style={styles.userContainer}>
          <Avatar.Image size={100} source={{ uri: userData.picture }} />
          <View style={styles.textContainer}>
            <Text>{userData.name}</Text>
          </View>
        </View>
      )}

      <Button style={styles.button} color='#F5DF68' mode="contained" onPress={() => logout()}>
        Logout
      </Button>
      <Button style={styles.button} color='#F5DF68' mode="contained" onPress={()=>navigation.dispatch(StackActions.replace("Intro"))}>Back</Button>

      <Button style={styles.button} color='#F5DF68' mode="contained" onPress={()=>clearSave()}>Delete Save</Button>

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
  button:{
    marginTop:15,
  },
});

export default AccountScreen;