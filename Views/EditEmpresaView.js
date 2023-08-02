import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const url = 'https://localhost:5001/api/Empresa';

const EditEmpresaView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { empresaData } = route.params;

  const [nombre, setNombre] = useState(empresaData.Nombre);
  const [telefono, setTelefono] = useState(empresaData.Telefono);
  const [direccion, setDireccion] = useState(empresaData.Direccion);

  const guardarCambios = async () => {
    try {
      // Construir el objeto con los datos actualizados de la empresa
      const empresaActualizada = {
        ...empresaData,
        Nombre: nombre,
        Telefono: telefono,
        Direccion: direccion,
      };

      // Realizar la solicitud PUT al servidor utilizando axios para actualizar la empresa
      const response = await axios.put(`${url}/${empresaData.CIF}`, empresaActualizada);

      // Mostrar la respuesta del servidor en la consola
      console.log('Respuesta del servidor:', response.data);

      // Aquí podrías manejar la respuesta del servidor o realizar otras acciones después de guardar los cambios

      // Navegar de regreso a la vista IndexEmpresas para ver la lista actualizada
      navigation.navigate('IndexEmpresas');
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <LinearGradient colors={[  '#880E4F', '#1A237E']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

        <Text style={styles.label}>Teléfono:</Text>
        <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} />

        <Text style={styles.label}>Dirección:</Text>
        <TextInput style={styles.input} value={direccion} onChangeText={setDireccion} />

        <TouchableOpacity style={styles.button} onPress={guardarCambios}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignContent:'center',
    alignItems:'center',
    flex: 1,
    padding: 16,
    color:'#fff',
    backgroundColor: 'transparent', // Set the background to transparent since it's covered by the gradient
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color:'#fff',
    width:'50%',
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

export default EditEmpresaView;
