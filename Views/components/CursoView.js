import React from 'react';
import { View } from 'react-native';
import Form from '../Form';
import { CursosModel,Cursos } from '../../Model/Cursos';


const cursoView = () => {
  const save =(/**@type{Curso}*/curso) =>
  {
    curso.save();
  }
  return (
      <Form model = {new CursosModel()}  editObject={new Cursos()} />
  );
};

export default cursoView;