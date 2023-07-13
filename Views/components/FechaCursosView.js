import React from 'react';
import { View } from 'react-native';
import Form from "../Form";
import  InfoCursoModel  from '../../Model/FechaCursosModel';


const Asistencia = () => {
  return (
   
   <View>
    <Form model = {new InfoCursoModel()}/>
   </View>
      
    
  );
};

export default Asistencia;