import React from 'react';
import { View } from 'react-native';
import Form from "../Form";
import ProfesoresModel  from '../../Model/Profesores';


const profesorView = () => {
  return (
   
   <View>
      <Form model = {new ProfesoresModel()}></Form>
      </View>
  );
};

export  default profesorView;