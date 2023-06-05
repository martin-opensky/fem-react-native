import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColourPalette from './screens/ColourPalette';
import AddPaletteModal from './screens/AddPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ title: 'Welcome' }}
    />
    <MainStack.Screen
      name="ColourPalette"
      component={ColourPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </MainStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator presentation="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false, title: 'Home' }}
        />
        <RootStack.Screen
          name="AddPaletteModal"
          component={AddPaletteModal}
          options={{ title: 'Add Colour Scheme' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
