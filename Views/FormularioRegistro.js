import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import EstilosInput from '../styles/estilos';

const RegistroUsuarioFormulario = () => {
  
  return (
    <View style={styles.container}>
      {}
      <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={text => setNombre(text)} />
      {}
      <TextInput style={styles.input} placeholder="Segundo nombre" value={segundoNombre} onChangeText={text => setSegundoNombre(text)} />
      {}
      <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={text => setApellido(text)} />
      {}
      <TextInput style={styles.input} placeholder="Segundo apellido" value={segundoApellido} onChangeText={text => setSegundoApellido(text)} />
      {}
      <TextInput style={styles.input} placeholder="Correo" value={correo} onChangeText={text => setCorreo(text)} keyboardType="email-address" />
      {}
      <TextInput style={styles.input} placeholder="Teléfono" value={telefono} onChangeText={text => setTelefono(text)} keyboardType="phone-pad" />
      {}
      <TextInput style={styles.input} placeholder="Contraseña" value={contraseña} onChangeText={text => setContraseña(text)} secureTextEntry={true} />
      {}
    </View>
  );
};

export default RegistroUsuarioFormulario;
