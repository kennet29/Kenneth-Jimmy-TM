import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const IndexProfesores = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/Profesores')
      .then((response) => response.json())
      .then((data) => setProfesores(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEditar = (profesor) => {
    // Lógica para editar el profesor con la información de 'profesor'
    console.log('Editar profesor:', profesor);
  };

  const handleBorrar = (dni) => {
    // Lógica para borrar el profesor con el DNI 'dni'
    console.log('Borrar profesor con DNI:', dni);
  };

  const renderProfesor = ({ item, index }) => (
    <View
      style={[
        styles.profesorContainer,
        index % 2 === 0 ? styles.par : styles.impar,
      ]}
    >
      <Text style={styles.text}>{item.DNI}</Text>
      <Text style={styles.text}>{item.Nombre}</Text>
      <Text style={styles.text}>{item.Apellidos}</Text>
      <Text style={styles.text}>{item.Direccion}</Text>
      <Text style={styles.text}>{item.Telefono}</Text>
      <View style={styles.opcionesContainer}>
        <TouchableOpacity
          style={styles.botonEditar}
          onPress={() => handleEditar(item)}
        >
          <Text style={styles.textBoton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonBorrar}
          onPress={() => handleBorrar(item.DNI)}
        >
          <Text style={styles.textBoton}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const windowHeight = Dimensions.get('window').height;
  const tableHeight = windowHeight * 0.8; // Tabla ocupa el 80% de la altura de la pantalla

  return (
    <View style={styles.container}>
      <View style={[styles.tablaContainer, { height: tableHeight }]}>
        <View style={styles.cabecera}>
          <Text style={[styles.text, styles.cabeceraText]}>DNI</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Nombre</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Apellidos</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Dirección</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Teléfono</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Opciones</Text>
        </View>
        <FlatList
          data={profesores}
          renderItem={renderProfesor}
          keyExtractor={(item) => item.DNI}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  tablaContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1abc9c', // Color azul turquesa
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cabeceraText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  profesorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  opcionesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonEditar: {
    backgroundColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  botonBorrar: {
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textBoton: {
    color: '#fff',
    fontSize: 16,
  },
  par: {
    backgroundColor: '#f2f2f2', // Color para filas pares
  },
  impar: {
    backgroundColor: '#fff', // Color para filas impares
  },
});

export default IndexProfesores;