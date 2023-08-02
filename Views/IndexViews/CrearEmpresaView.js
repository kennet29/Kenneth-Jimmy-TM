import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const url = 'https://localhost:5001/api/Empresa';

const CrearEmpresaView = () => {
  const [cif, setCif] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigation = useNavigation();

  const guardarEmpresa = async () => {
    try {
      // Construir el objeto con los datos de la nueva empresa
      const nuevaEmpresa = {
        CIF: cif,
        Nombre: nombre,
        Telefono: telefono,
        Direccion: direccion,
      };

      // Realizar la solicitud POST al servidor utilizando axios
      const response = await axios.post(url, nuevaEmpresa);

      // Mostrar la respuesta del servidor en la consola
      console.log('Respuesta del servidor:', response.data);

      // Navegar de regreso a la vista IndexEmpresas para ver la lista actualizada
      navigation.navigate('IndexEmpresas');
    } catch (error) {
      console.error('Error al guardar la nueva empresa:', error);
    }
  };

  return (
    <LinearGradient colors={['#880E4F', '#1A237E']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.label}>CIF:</Text>
        <TextInput style={styles.input} value={cif} onChangeText={setCif} />

        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

        <Text style={styles.label}>Teléfono:</Text>
        <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} />

        <Text style={styles.label}>Dirección:</Text>
        <TextInput style={styles.input} value={direccion} onChangeText={setDireccion} />

        <TouchableOpacity style={styles.button} onPress={guardarEmpresa}>
          <Text style={styles.buttonText}>Guardar</Text>
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
    paddingHorizontal: 10,
    marginBottom: 16,
    width:'60%',
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

export default CrearEmpresaView;
