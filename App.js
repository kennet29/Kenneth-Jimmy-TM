//@ts-check
import { StatusBar } from 'expo-status-bar';
import { Text, View ,TextInput} from 'react-native';
import {Principal} from './styles/main_style'; 

import React from 'react';
import {Form} from './Form'; 

class Cliente {
  constructor(props) {
    for (const key in props) {
      this[key] = props[key];
    }
  }
  name = undefined;
}

/**@type {Array<Cliente>} */
const dataset = [
  new Cliente({ name: "name 1" }),
  new Cliente({ name: "name 2" }),
  new Cliente({ name: "name 3" }),
  new Cliente({ name: "name 4" }),
];

const model = {
  prop1: { type: 'TEXT' },
  prop2: { type: 'DATE' },
  prop3: { type: 'PASSWORD' },
  
};


export default function App() {
  return (
    <View  style={Principal.Main}> 
      <Text >TEST COMPONENT</Text> {}
      
      <Form model={model} />
      
    
    </View>
  );
}