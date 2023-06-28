import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, StyleSheet } from "react-native";
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from "./Views/components/Navigation";

const Stack = createStackNavigator();
export default function App() {
  return <Navigation />;
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
