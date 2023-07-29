import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const url = 'https://localhost:5001/api/Profesores';

const CrearProfesorView = () => {
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const navigation = useNavigation();

  const guardarProfesor = async () => {
    try {
      // Construir el objeto con los datos del nuevo profesor
      const nuevoProfesor = {
        DNI: dni,
        Nombre: nombre,
        Apellidos: apellidos,
        Direccion: direccion,
        Telefono: telefono,
      };

      // Realizar la solicitud POST al servidor utilizando axios
      const response = await axios.post(url, nuevoProfesor);

      // Mostrar la respuesta del servidor en la consola
      console.log('Respuesta del servidor:', response.data);

      // Aquí podrías manejar la respuesta del servidor o realizar otras acciones después de guardar el nuevo profesor

      // Navegar de regreso a la vista Index_Profesores para ver la lista actualizada
      navigation.navigate('Index_Profesores');
    } catch (error) {
      console.error('Error al guardar el nuevo profesor:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>DNI:</Text>
      <TextInput
        style={styles.input}
        value={dni}
        onChangeText={setDni}
      />

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Apellidos:</Text>
      <TextInput
        style={styles.input}
        value={apellidos}
        onChangeText={setApellidos}
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

      <TouchableOpacity style={styles.button} onPress={guardarProfesor}>
        <Text style={styles.buttonText}>Guardar Profesor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CrearProfesorView;
