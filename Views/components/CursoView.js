import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import { CursosModel } from '../../Model/Cursos';


const CursoView = () => {
  return (
   
   
      <Form model = {new CursosModel()}></Form>
    
  );
};

export default CursoView;