import React from 'react';
import { View } from 'react-native';
import Form from "../Form"; 
import EmpresasModel from '../../Model/Empresas';


const empresaView = () => {
  return (
   
   <View>
 <Form model = {new EmpresasModel()}></Form>
   </View>
   
  );
};

export default empresaView;