import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import  InfoCursoModel  from '../../Model/InfoCurso';


const CursoView = () => {
  return (
   
   
      <Form model = {new InfoCursoModel()}></Form>
    
  );
};

export default CursoInfo;