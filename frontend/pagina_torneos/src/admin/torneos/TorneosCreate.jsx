import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const TorneosCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      {/* Agrega más campos aquí según tus necesidades */}
    </SimpleForm>
  </Create>
);

export default TorneosCreate;
