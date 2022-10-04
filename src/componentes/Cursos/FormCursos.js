import react, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
//import Profesores from './Profesores';

function FormCursos() {
  const [nombre, setNombre] = useState("");
  const [ListCursos, setListCursos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/cursos").then((response) => {
      setListCursos(response.data);
    });
  }, []);

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
          {ListCursos.map((val) => {
            return (
              <p>
                {val.id} {val.curso}
              </p>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
export default FormCursos;
