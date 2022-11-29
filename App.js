// /App.js

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Intro from './src/screens/Intro';
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Account from './src/screens/Account';
import About from './src/screens/About';
import Game from './src/screens/Game';
import Victory from './src/screens/Victory';
import Defeat from './src/screens/Defeat';

import {AuthContextProvider} from './src/context/AuthContext';
import { GameContextProvider } from './src/context/GameContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContextProvider>
      <GameContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Victory" component={Victory} />
          <Stack.Screen name="Defeat" component={Defeat} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Account" component={Account} />
          </Stack.Navigator>
        </NavigationContainer>
        </GameContextProvider>
      </AuthContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;