import React from "react";
import { View } from "react-native";
import Form from "../Form";
import { EmpresasModel, Empresas } from "../../Model/Empresas";

const empresaView = () => {
  const save = (/**@type{Empresas}*/ empresas) => {
    empresas.save();
  };
  return (
    <View>
      <Form model={new EmpresasModel()} editObject={new Empresas()} />
    </View>
  );
};

export default empresaView;
