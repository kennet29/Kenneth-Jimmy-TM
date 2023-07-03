import React from 'react';
import { barraStyle, botonStyle } from './styles';

const BarraCentrada = () => {
  return (
    <div style={barraStyle}>
      <button style={botonStyle}>Agregar</button>
      <button style={botonStyle}>Borrar</button>
      <button style={botonStyle}>Editar</button>
    </div>
  );
};

export default BarraCentrada;
