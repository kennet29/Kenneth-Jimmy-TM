import React from 'react';
import { View } from 'react-native';

import { CursosModel } from '../../Model/Cursos';


const cursoView = () => {
  return (
   
   
      <Form model = {new CursosModel()}></Form>
    
  );
};

export default cursoView;