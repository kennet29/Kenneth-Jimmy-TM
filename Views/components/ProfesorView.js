import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfesoresModel  from '../../Model/Cursos/ProfesoresModel';


const profesorView = () => {
  return (
   
   
      <Form model = {new ProfesoresModel()}></Form>
    
  );
};

export default profesorView;