import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './navigation/MainScreen';
import OtherScreen from './navigation/DailyQuoteScreen'; // Example additional screen

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Quote of the Day" component={OtherScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


