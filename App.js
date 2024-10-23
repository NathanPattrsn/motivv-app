import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './navigation/MainScreen';
import OtherScreen from './navigation/DailyQuoteScreen'; // Example additional screen
import LoginScreen from './navigation/LoginScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const onLogin = () => {
    // Handle what happens after login here
    console.log("User logged in!");
    // You can navigate to the main screen or update app state
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Quote of the Day" component={OtherScreen} />
        <Drawer.Screen 
          name="Login" 
          component={(props) => <LoginScreen {...props} onLogin={onLogin} />} // Pass the onLogin function correctly
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
