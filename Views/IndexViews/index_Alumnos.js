import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const url = 'https://localhost:5001/api/Alumnos';

const Index_Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  const obtenerAlumnos = async () => {
    try {
      const response = await axios.get(url);
      setAlumnos(response.data);
    } catch (error) {
      console.error('Error al obtener datos de los alumnos:', error);
    }
  };

  const editarAlumno = (Alumno) => {
    // Navegar a la vista AlumnoEditView y pasar los datos del alumno como parámetro
    navigation.navigate('AlumnoEditView', { alumnoData: Alumno });
  };

  const crearAlumno = () => {
    // Navegar a la vista CrearAlumno para crear un nuevo alumno
    navigation.navigate('CrearAlumno',);
  };

  const borrarAlumno = async (dni) => {
    try {
      const deleteUrl = `https://localhost:5001/api/Alumnos/${dni}`;
      const response = await axios.delete(deleteUrl);
      console.log('Borrar alumno con DNI:', dni);
      // Actualizar la lista de alumnos después de eliminar el alumno
      obtenerAlumnos();
    } catch (error) {
      console.error('Error al borrar el alumno:', error);
    }
  };

  const renderAlumnoItem = ({ item }) => {
    return (
      <View style={styles.alumnoContainer}>
        <Text style={styles.alumnoText}>{item.DNI}</Text>
        <Text style={styles.alumnoText}>{item.Direccion}</Text>
        <Text style={styles.alumnoText}>{item.Nombre}</Text>
        <Text style={styles.alumnoText}>{item.Telefono}</Text>
        <Text style={styles.alumnoText}>{item.Edad}</Text>
        <View style={styles.opcionesContainer}>
          <TouchableOpacity style={styles.button} onPress={() => editarAlumno(item)}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FF4500' }]}
            onPress={() => borrarAlumno(item.DNI)}
          >
            <Text style={styles.buttonText}>Borrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>DNI</Text>
        <Text style={styles.headerText}>Direccion</Text>
        <Text style={styles.headerText}>Nombre</Text>
        <Text style={styles.headerText}>Telefono</Text>
        <Text style={styles.headerText}>Edad</Text>
        <Text style={[styles.headerText, { backgroundColor: '#40E0D0' }]}>Opciones</Text>
      </View>
      <FlatList
        data={alumnos}
        keyExtractor={(item) => (item.id !== undefined ? item.id.toString() : item.DNI)}
        renderItem={renderAlumnoItem}
      />
      <TouchableOpacity style={styles.crearButton} onPress={crearAlumno}>
        <Text style={styles.crearButtonText}>Crear</Text>
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
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    backgroundColor: '#40E0D0',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alumnoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  alumnoText: {
    flex: 1,
    textAlign: 'center',
  },
  opcionesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  // Estilos para el botón "Crear"
  crearButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  crearButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Index_Alumnos;
