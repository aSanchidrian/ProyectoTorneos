import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import TorneosList from "./torneos/TorneosList";
import TorneosCreate from "./torneos/TorneosCreate";
import TorneosEdit from "./torneos/TorneosEdit";
const dataProvider = simpleRestProvider("http://localhost:3000/api");

const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="torneos"
      list={TorneosList}
      create={TorneosCreate}
      edit={TorneosEdit}
    />
  </Admin>
);

export default AdminPanel;
