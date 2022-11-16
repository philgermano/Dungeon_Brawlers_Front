/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button
 } from 'react-native';
 import {useAuth0, Auth0Provider} from 'react-native-auth0';

 import LandingScreen from './src/screens/LandingScreen'
 

 const Home = () => {
  const {authorize, clearSession, user} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}

      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
      {loggedIn && <Text>You are {user.nickname}</Text>}
    </View>
  );
};


 const App=() => {
 
     
   return (
     <SafeAreaView style={styles.safeAreaView}>
     <StatusBar barStyle={'dark-content'} backgroundColor="white" />
     <Auth0Provider domain={"dev-hvpdkc2ulh3du54f.us.auth0.com"} clientId={"U8a5c6uaXOHhuZc6DxcHwGX65Due1SWb"}>
      <Home />
    </Auth0Provider>
     </SafeAreaView>
   ); 
 };
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   safeAreaView: {
     backgroundColor: 'white',
     flex: 1
   },
   statusBar: {
     color: 'black',
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 