import React from 'react';
import { View } from 'react-native';
import {AlumnosModel} from "../../Model/Alumno";
import Form from "../Form"; // Suponiendo que tienes un componente Form definido en un archivo separado

const alumnoView = () => {
  return (
    <View>
      <Form model={new AlumnosModel()} />
    </View>
  );
};

export default alumnoView;
