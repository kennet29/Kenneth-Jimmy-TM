import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, StyleSheet } from "react-native";
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Views/components/Navbr";


const Stack = createStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#FFFF00',},
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
