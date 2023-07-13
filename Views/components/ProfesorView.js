import React from 'react';
import { View } from 'react-native';
import Form from "../Form";
import { Profesores,ProfesoresModel}  from '../../Model/Profesores';


const profesorView = () => {
  const save = ( /**@type{Profesores}*/profesor) => {
    profesor.save();
  }
  return (
   
   <View>
      <Form model = {new ProfesoresModel()}></Form>
      </View>
  );
};

export  default profesorView;