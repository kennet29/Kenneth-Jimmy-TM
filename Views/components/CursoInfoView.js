import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import  InfoCursoModel  from '../../Model/InfoCurso';


const cursoinfoView = () => {
  return (
   
   
      <Form model = {new InfoCursoModel()}></Form>
    
  );
};

export default cursoinfoView;