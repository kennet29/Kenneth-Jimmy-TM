import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import EmpresasModel from '../../Model/Cursos/EmpresasModel';


const empresaView = () => {
  return (
   
   
      <Form model = {new EmpresasModel()}></Form>
    
  );
};

export default empresaView;