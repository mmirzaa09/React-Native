/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash, Login, Register, HomeScreen, Profile} from '../Pages';
import Header_Login from '../Header/header_login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const Home = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Halaman Utama" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
};


export default Router;
