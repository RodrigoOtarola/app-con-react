import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from './componentes/Profesores/FormProfesores';
import FormAlumno from './componentes/Alumnos/FormAlumnos';
import FormCursos from './componentes/Cursos/FormCursos';
import MenuComponentes from './componentes/MenuComponentes';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MenuComponentes />} />
      </Routes>
      <Routes>
        <Route path='/ingresaProfesor' element={<Form/>}/>
      </Routes>
      <Routes>
        <Route path='/ingresaAlumno' element={<FormAlumno />}/>
      </Routes>
      <Routes>
        <Route path='/ingresaCurso' element={<FormCursos />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
