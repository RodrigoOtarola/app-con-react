import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { redirect } from "react-router-dom";
//import Profesores from './Profesores';

function Form() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  //const [get,setGet] = useState(null);
  const [ListProfesores, setListProfesores] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/profesores").then((response) => {
      setListProfesores(response.data);
    });
  }, []);

  const submit = () => {
    Axios.post("http://localhost:3001/ingresaProfesor", {
      nombre: nombre,
      apellido: apellido,
    }).then(() => {
      alert("Registro Exitoso");
    });
  };
  return (
    <Fragment>
      <div className="container">
        <h1>Ingresa Profesor</h1>
        <div className="form">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            onChange={(e) => {
              setApellido(e.target.value);
            }}
          />
          <br />
          <button type="submit" onClick={submit}>
            Guardar
          </button>
          <br />
          <h3>Listado</h3>
          <table>
            <thead>
              <th>Nro.</th>
              <th>Nombre</th>
              <th>Apellido</th>
            </thead>
            <tbody>
              {ListProfesores.map((val) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.nombre}</td>
                    <td>{val.apellido}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
export default Form;
