import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AlumnosModel } from '../../Model/Alumno';

const Navbar = () => {
  const navigation = useNavigation();

  const navigateToAlumnos = () => {
    navigation.navigate('Alumnos');
  };

  const navigateToEmpresas = () => {
    navigation.navigate('Empresas');
  };

  const navigateToPerfil = () => {
    navigation.navigate('Perfil');
  };
  const navigateToProfesores = () => {
    navigation.navigate('Profesores');
  };
 
  const navigateToAlumnoView = () => {
    navigation.navigate('AlumnoView', { Alumno });
  };

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button} onPress={navigateToAlumnos}>
        <Text style={styles.buttonText}>Alumnos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToEmpresas}>
        <Text style={styles.buttonText}>Empresas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToPerfil}>
        <Text style={styles.buttonText}>Cursos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToProfesores}>
        <Text style={styles.buttonText}>Profesores</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor:'#777777',
  },
  button: {
    width: 200,
    height: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius:5,
    backgroundColor: '#8B0000',
  },
  buttonText: {
    fontStyle:"italic",
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Navbar;
