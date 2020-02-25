/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,Text
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';


import HomeScreen from "./Components/HomeScreen";
import SecondScreen from "./Components/SecondScreen";
import About from "./Components/About";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import Header from "./Components/Header";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//      <Tab.Screen name="HomeScreen" component={HomeScreen} />
//     </Tab.Navigator>
//   );
// }



const App: () => React$Node = () => {
  return (
    <>   
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="About">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="SecondScreen" component={SecondScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="LoginPage" component={LoginPage} />
      <Drawer.Screen name="RegisterPage" component={RegisterPage} />
    </Drawer.Navigator>
  </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
