import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import  AlumnosModel  from '../../Model/Cursos/Alumno';


const CursoView = () => {
  return (
   
   
      <Form model = {new AlumnosModel()}></Form>
    
  );
};

export default CursoViewVista;