import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const url = 'https://localhost:5001/api/Alumnos';

const CrearAlumno = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [edad, setEdad] = useState('');
  const navigation = useNavigation();

  const guardarAlumno = async () => {
    try {
      // Construir el objeto con los datos del nuevo alumno
      const nuevoAlumno = {
        DNI: id,
        Nombre: nombre,
        Direccion: direccion,
        Telefono: telefono,
        Edad: edad,
      };

      // Realizar la solicitud POST al servidor utilizando axios
      const response = await axios.post(url, nuevoAlumno);

      // Mostrar la respuesta del servidor en la consola
      console.log('Respuesta del servidor:', response.data);

      // Aquí podrías manejar la respuesta del servidor o realizar otras acciones después de guardar el nuevo alumno

      // Navegar de regreso a la vista Index_Alumnos para ver la lista actualizada
      navigation.navigate('Index_Alumnos');
    } catch (error) {
      console.error('Error al guardar el nuevo alumno:', error);
    }
  };

  const limpiarCampos = () => {
    setId('');
    setNombre('');
    setDireccion('');
    setTelefono('');
    setEdad('');
  };

  // Calculate 80% of the screen height
  const screenHeight = Dimensions.get('window').height;
  const formHeight = screenHeight * 0.8;

  return (
    <LinearGradient
      colors={['#880E4F', '#1A237E']}
      style={[styles.container, { height: formHeight, justifyContent: 'center' }]}
    >
      <Text style={styles.label}>ID:</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
      />

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Dirección:</Text>
      <TextInput
        style={styles.input}
        value={direccion}
        onChangeText={setDireccion}
      />

      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
      />

      <Text style={styles.label}>Edad:</Text>
      <TextInput
        style={styles.input}
        value={edad}
        onChangeText={setEdad}
      />

      <TouchableOpacity style={styles.button} onPress={guardarAlumno}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={limpiarCampos}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
    width: '50%',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    margin:10,
    alignSelf: 'center',
    width: '25%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CrearAlumno;
