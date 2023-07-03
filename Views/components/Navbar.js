import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const navigateToInicio = () => {
    navigation.navigate('Inicio');
  };

  const navigateToExplorar = () => {
    navigation.navigate('Explorar');
  };

  const navigateToPerfil = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToInicio}>
        <Text style={styles.buttonText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToExplorar}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToPerfil}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor:'#000',
  },
  button: {
    width: 200,
    height: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius:5,
    backgroundColor: '#005B60',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Navbar;
