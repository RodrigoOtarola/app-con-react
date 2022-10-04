import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';


const MenuComponentes = ()=>{
    return(         
        <nav>
            <li>
                <Link to="/ingresaProfesor">Profesores</Link>
            </li>
            <li>
                <Link to="/ingresaCurso">Cursos</Link>
            </li>
            <li>
                <Link to="/ingresaAlumno">Alumnos</Link>
            </li>
        </nav>
    );
};

export default MenuComponentes;
