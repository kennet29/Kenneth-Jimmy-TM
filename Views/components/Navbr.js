import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const handleCursosPress = () => {
    navigation.navigate('Cursos');
  };

  const handleAlumnosPress = () => {
    navigation.navigate('AlumnoView');
  };

  const handleProfesoresPress = () => {
    navigation.navigate('Profesores');
  };

  const handleEmpresasPress = () => {
    navigation.navigate('Empresas');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Sistema de Información" />
      </Appbar.Header>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleCursosPress} style={styles.button}>
          Cursos
        </Button>
        <Button mode="contained" onPress={handleAlumnosPress} style={styles.button}>
          Alumnos
        </Button>
        <Button mode="contained" onPress={handleProfesoresPress} style={styles.button}>
          Profesores
        </Button>
        <Button mode="contained" onPress={handleEmpresasPress} style={styles.button}>
          Empresas
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    width: 200,
  },
});

export default HomeScreen;