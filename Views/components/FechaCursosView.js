import React from 'react';
import { View } from 'react-native';
import Form from "../Form";
import  {FechaCursosModel,FechaCursos}  from '../../Model/FechaCursosModel';


const Asistencia = () => {
  const save = (/**@type{FechaCursos}*/ fechas) => {
    fechas.save();
  };
  return (
   
   <View>
    <Form model = {new FechaCursosModel()}  editObject={new FechaCursos()}/>
   </View>
      
    
  );
};

export default Asistencia;