import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Index_Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://localhost:5001/api/Empresa')
      .then((response) => response.json())
      .then((data) => setEmpresas(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEditar = (empresa) => {
    // Lógica para editar la empresa con la información de 'empresa'
    navigation.navigate('EditEmpresaView', { empresaData: empresa });
  };

  const handleBorrar = (cif) => {
    // Lógica para borrar la empresa con el CIF 'cif'
    console.log('Borrar empresa con CIF:', cif);
  };

  const handleCrear = () => {
    // Navegar a la vista para crear una nueva empresa
    navigation.navigate('CrearEmpresaView');
  };

  const renderEmpresa = ({ item, index }) => (
    <View
      style={[
        styles.empresaContainer,
        index % 2 === 0 ? styles.par : styles.impar,
      ]}
    >
      <Text style={styles.text}>{item.CIF}</Text>
      <Text style={styles.text}>{item.Nombre}</Text>
      <Text style={styles.text}>{item.Telefono}</Text>
      <Text style={styles.text}>{item.Direccion}</Text>
      <View style={styles.opcionesContainer}>
        <TouchableOpacity
          style={styles.botonEditar}
          onPress={() => handleEditar(item)}
        >
          <Text style={styles.textBoton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonBorrar}
          onPress={() => handleBorrar(item.CIF)}
        >
          <Text style={styles.textBoton}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const windowHeight = Dimensions.get('window').height;
  const tableHeight = windowHeight * 0.8;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.crearButton} onPress={handleCrear}>
        <Text style={styles.crearButtonText}>Crear Empresa</Text>
      </TouchableOpacity>
      <View style={[styles.tablaContainer, { height: tableHeight }]}>
        <View style={styles.cabecera}>
          <Text style={[styles.text, styles.cabeceraText]}>CIF</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Nombre</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Teléfono</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Dirección</Text>
          <Text style={[styles.text, styles.cabeceraText]}>Opciones</Text>
        </View>
        <FlatList
          data={empresas}
          renderItem={renderEmpresa}
          keyExtractor={(item) => item.CIF}
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
    backgroundColor: '#1abc9c',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cabeceraText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  empresaContainer: {
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
    backgroundColor: '#f2f2f2',
  },
  impar: {
    backgroundColor: '#fff',
  },
  crearButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  crearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index_Empresas;
