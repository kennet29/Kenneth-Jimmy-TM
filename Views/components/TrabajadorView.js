import React from 'react';
import { View } from 'react-native';

import TrabajadorModel  from '../../Model/Trabajador';


const trabajadorView = () => {
  return (
   
   
      <Form model = {new TrabajadorModel()}></Form>
    
  );
};

export default trabajadorView;