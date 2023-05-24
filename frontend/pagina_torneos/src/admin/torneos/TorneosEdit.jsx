import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const TorneosEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      {/* Agrega más campos aquí según tus necesidades */}
    </SimpleForm>
  </Edit>
);

export default TorneosEdit;
