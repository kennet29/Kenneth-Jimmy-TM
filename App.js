import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Navbar from './Views/components/Navbar';
import AlumnosViews from "./Views/components/AlumnoView";
import EmpresaView from "./Views/components/EmpresaView";
import CursoView from "./Views/components/CursoView";
import ProfesoresView from "./Views/components/ProfesorView"
import FechaCursosView from './Views/components/FechaCursosView';
import Index_Alumnos from './Views/IndexViews/index_Alumnos';
import Index_Empresas from './Views/IndexViews/index_Empresas';
import AlumnoEditView from './Views/AlumnoEditView';
import CrearAlumno from './Views/IndexViews/CrearAlumno';
import CrearEmpresaView from './Views/IndexViews/CrearEmpresaView'; // Importa la vista CrearEmpresaView
import index_Profesores from './Views/IndexViews/index_Profesores';
import EditarProfesor from './Views/IndexViews/EditarProfesor';
import CrearProfesorView from './Views/IndexViews/CrearProfesorView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navbar" headerMode="screen">
        <Stack.Screen
          name="Navbar"
          style={{ background: 'darkred' }}
          component={Navbar}
          options={{
            headerTitle: (props) => (
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Registro Académico
              </Text>
            ),
          }}
        />

        <Stack.Screen name="Alumnos" component={Index_Alumnos} />
        <Stack.Screen name="Empresas" component={Index_Empresas} />
        <Stack.Screen name="Perfil" component={CursoView} />
        <Stack.Screen name="Profesores" component={index_Profesores} />
        <Stack.Screen name="Informacion_Cursos"  />

        <Stack.Screen
          name="AlumnoEditView"
          component={AlumnoEditView}
          options={{ headerTitle: 'Editar Alumno' }}
        />

        <Stack.Screen
          name="CrearAlumno"
          component={CrearAlumno}
          options={{ headerTitle: 'Crear Nuevo Alumno' }}
        />

        <Stack.Screen
          name="CrearEmpresaView"
          component={CrearEmpresaView}
          options={{ headerTitle: 'Crear Nueva Empresa' }}
        />


        <Stack.Screen
          name="EditarProfesor"
          component={EditarProfesor}
          options={{ headerTitle: 'Editar Profesor' }}
        />
        <Stack.Screen
          name="CrearProfesor"
          component={CrearProfesorView}
          options={{ headerTitle: 'Crear Profesor' }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
