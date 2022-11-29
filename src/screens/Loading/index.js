
import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";
import {useTheme} from 'react-native-paper';
import { AuthContext } from "../../context/AuthContext";

function LoadingScreen({ navigation }) {
  const { loading, loggedIn } = useContext(AuthContext);
  const theme = useTheme();

  useEffect(() => {
    if (loggedIn) {
      navigation.dispatch(StackActions.replace("GameSelect"));
    } else if (loggedIn === false) {
      navigation.dispatch(StackActions.replace("Login"));
    }
  }, [loggedIn]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
          </View>
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;