/*import react, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

function Profesores() {
  const [ListProfesores, setListProfesores] = react.useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/profesores").then((response) => {
      setListProfesores(response.data);
    });
  }, []);

  //if (!post) return null;

  return (
    <div>
      {ListProfesores.map((val) => {
        return (
          <p>
            {val.nombre} {val.apellido}
          </p>
        );
      })}
    </div>
  );
}

export default Profesores;*/
