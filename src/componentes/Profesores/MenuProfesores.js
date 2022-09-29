import react, { Fragment } from "react";
import { BrowserRouter, Router, Routes, Link } from "react-router-dom";

const MenuProfesores = () => {
  return (
    <Fragment>
    <nav>
    <li>
        <Link to="/ingresaProfesor">Profesores</Link>
    </li>
    </nav>
    </Fragment>
  );
};

export default MenuProfesores;
/*
    <Fragment>            
    <nav>
        <li>
            <Link to="/profesoresCount">Profesores</Link>
        </li>
        <li>
            <Link to="/ingresaCurso">Cursos</Link>
        </li>
        <li>
            <Link to="/ingresaAlumno">Alumnos y</Link>
        </li>
    </nav>
    </Fragment>
*/