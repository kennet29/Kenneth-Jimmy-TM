import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import alumnoView from './AlumnoView';
import profesorView from './ProfesorView';
import cursoView from './CursoView';
import cursoinfoView from './CursoInfoView';
import empresaView from './EmpresaView';
import trabajadorView from './TrabajadorView';





const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Alumno" component={alumnoView} options={{ title: 'Alumno' }} />
        <Stack.Screen name="Profesor" component={ profesorView} options={{ title: 'Profesores' }} />
        <Stack.Screen name="Profesor" component={ cursoView} options={{ title: 'Curso' }} />
        <Stack.Screen name="Profesor" component={ cursoinfoView} options={{ title: 'Informacion Cursos' }} />
        <Stack.Screen name="Profesor" component={ empresaView} options={{ title: 'Empresas' }} />
        <Stack.Screen name="Profesor" component={ trabajadorView} options={{ title: 'Trabajador' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
