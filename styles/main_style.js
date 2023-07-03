import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Principal = StyleSheet.create({

  Centrado:
  {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Main:{
    flex:1,
    borderColor:'#0000',
    borderRadius:5,
    border:5,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1: {
    flex:1,
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  header2: {
    flex:1,
    fontSize: 18,
    fontWeight: 'bold',
  },

  text_style:{
    fontSize: '16px',
    color: 'red',
    fontWeight: 'bold',
  },
  controlsStyle :{
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  },
  input:
  {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5, // Ajusta este valor para cambiar el grado de curvatura del borde
    paddingHorizontal: 10,
    fontSize: 16,

  }
});

export { Principal };
