import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const AlumnoEditView = ({ route }) => {
  const { alumnoData } = route.params;

  const [nombre, setNombre] = useState(alumnoData.Nombre);
  const [direccion, setDireccion] = useState(alumnoData.Direccion);
  const [telefono, setTelefono] = useState(alumnoData.Telefono);
  const [edad, setEdad] = useState(alumnoData.Edad);

  const saveAlumno = async () => {
    try {
      // Construir el objeto con los datos actualizados del alumno
      const updatedAlumno = {
        ...alumnoData,
        Nombre: nombre,
        Direccion: direccion,
        Telefono: telefono,
        Edad: edad,
      };

      // Realizar la solicitud PUT al servidor utilizando axios
      const response = await axios.put(`https://localhost:5001/api/Alumnos/${alumnoData.DNI}`, updatedAlumno);

      // Mostrar la respuesta del servidor en la consola
      console.log('Respuesta del servidor:', response.data);

      // Aquí podrías manejar la respuesta del servidor o realizar otras acciones después de guardar los cambios
    } catch (error) {
      console.error('Error al guardar cambios del alumno:', error);
    }
  };

  return (
    <LinearGradient
      colors={[  '#880E4F', '#1A237E']}
      style={styles.container}>
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
      <TouchableOpacity style={styles.button} onPress={saveAlumno}>
        <Text style={styles.buttonText}>Guardar</Text>
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
    borderRadius: 5,
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
    alignSelf: 'center',
    width: '20%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlumnoEditView;
