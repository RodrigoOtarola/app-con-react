import react, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
//import Profesores from './Profesores';

function FormCursos() {
  const [nombre, setNombre] = useState("");
  const [ListCursos, setListCursos] = useState([]);
  const [CountCursos, setCountCursos] = useState([]);

  //Listar cursos
  useEffect(() => {
    Axios.get("http://localhost:3001/cursos").then((response) => {
      setListCursos(response.data);
    });
  }, []);

  //Contar curso
  useEffect(() => {
    Axios.get("http://localhost:3001/cursosCount").then((response) => {
      setCountCursos(response.data);
    });
  }, []);

  //insertar curso
  const submit = () => {
    Axios.post("http://localhost:3001/ingresaCurso", {
      nombre: nombre,
    }).then(() => {
      alert("Registro Exitoso");
    });
  };
  return (
    <Fragment>
      <div className="container">
        <h1>Crear nuevo curso</h1>
        <div className="form">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={(e) => {
              setNombre(e.target.value);
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
            </thead>
            <tbody>
              {ListCursos.map((val) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.curso}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>          
          {CountCursos.map((val) => {
            return(
              <h3>Contador: <span>{val.total}</span></h3>              
            )
          })}
        </div>
      </div>
    </Fragment>
  );
}
export default FormCursos;
