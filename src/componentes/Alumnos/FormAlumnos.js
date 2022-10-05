import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
//import Profesores from './Profesores';

function FormAlumno() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [n4, setN4] = useState("");

  //Mostrar variables
  const [ListAlumnos, setListAlumnos] = useState([]);
  const [CountAlumnos, setCountAlumnos] = useState([]);

  //Listar alumnos
  useEffect(() => {
    Axios.get("http://localhost:3001/alumnos").then((response) => {
      setListAlumnos(response.data);
    });
  }, []);

  //Contar alumnos
  //Contar profesores
  useEffect(() => {
    Axios.get("http://localhost:3001/alumnosCount").then((response) => {
      setCountAlumnos(response.data);
    });
  }, []);

  //Insertar alumnos
  const submit = () => {
    Axios.post("http://localhost:3001/ingresaAlumno", {
      nombre: nombre,
      apellido: apellido,
      n1: n1,
      n2: n2,
      n3: n3,
      n4: n4,
    }).then(() => {
      alert("Registro Exitoso");
    });
  };
  return (
    <Fragment>
      <div className="container">
        <h1>Ingresa Alumno</h1>
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
          <label htmlFor="n1">Nota1</label>
          <input
            type="number"
            name="n1"
            id="n1"
            onChange={(e) => {
              setN1(e.target.value);
            }}
          />
          <label htmlFor="n2">Nota 2</label>
          <input
            type="number"
            name="n2"
            id="n2"
            onChange={(e) => {
              setN2(e.target.value);
            }}
          />
          <label htmlFor="n3">Nota 3</label>
          <input
            type="number"
            name="n3"
            id="n3"
            onChange={(e) => {
              setN3(e.target.value);
            }}
          />
          <label htmlFor="n4">Nota 4</label>
          <input
            type="number"
            name="n4"
            id="n4"
            onChange={(e) => {
              setN4(e.target.value);
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
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Nota 4</th>
              <th>Promedio</th>
              <th>Estado</th>
            </thead>
            <tbody>
              {ListAlumnos.map((val) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.nombre}</td>
                    <td>{val.nota1}</td>
                    <td>{val.nota2}</td>
                    <td>{val.nota3}</td>
                    <td>{val.nota4}</td>
                    <td>{val.promedio}</td>
                    if ({val.promedio} => 4.0){
                      <td>Aprobado</td>
                    }else{
                    <td>Reprobado</td>
                    }
                  </tr>
                );
              })}
            </tbody>
          </table>
          {CountAlumnos.map((val) => {
            return (
              <h3>
                Contador: <span>{val.total}</span>
              </h3>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
export default FormAlumno;
