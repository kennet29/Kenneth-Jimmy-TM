import React from 'react';
import { View } from 'react-native';
import {Alumnos, AlumnosModel} from "../../Model/Alumno";
import Form from "../Form"; // Suponiendo que tienes un componente Form definido en un archivo separado

const alumnoView = () => {
  const save = ( /**@type{Alumnos}*/alumno) => {
    alumno.save();
  }
  return (
    <View>
      <Form model={new AlumnosModel()}  editObject={new Alumnos()}/>
    </View>
  );
  
};

export default alumnoView;
