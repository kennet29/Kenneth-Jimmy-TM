import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';

const EditarProfesor = () => {
  const route = useRoute();
  const { profesorData } = route.params;
  const [dni, setDni] = useState(profesorData.DNI);
  const [nombre, setNombre] = useState(profesorData.Nombre);
  const [apellidos, setApellidos] = useState(profesorData.Apellidos);
  const [direccion, setDireccion] = useState(profesorData.Direccion);
  const [telefono, setTelefono] = useState(profesorData.Telefono);
  const navigation = useNavigation();

  const url = 'https://localhost:5001/api/Profesores';

  const handleGuardarCambios = async () => {
    try {
      // Construir el objeto con los datos del profesor actualizados
      const profesorActualizado = {
        DNI: dni,
        Nombre: nombre,
        Apellidos: apellidos,
        Direccion: direccion,
        Telefono: telefono,
      };

      // Realizar la solicitud PUT al servidor utilizando axios
      const response = await axios.put(`${url}/${dni}`, profesorActualizado);

      // Mostrar la respuesta del servidor en la consola
      console.log('Respuesta del servidor:', response.data);

      // Aquí podrías manejar la respuesta del servidor o realizar otras acciones después de guardar los cambios

      // Navegar de regreso a la vista ProfesoresView para ver la lista actualizada
      navigation.navigate('ProfesoresView');
    } catch (error) {
      console.error('Error al guardar los cambios del profesor:', error);
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

      <TouchableOpacity style={styles.button} onPress={handleGuardarCambios}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
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

export default EditarProfesor;
