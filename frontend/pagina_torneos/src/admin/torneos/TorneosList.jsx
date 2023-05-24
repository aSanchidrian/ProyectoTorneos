import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const TorneosList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" />
      {/* Agrega más campos aquí según tus necesidades */}
    </Datagrid>
  </List>
);

export default TorneosList;
