import react, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';
//import Profesores from './Profesores';

function FormAlumno(){
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    //const [get,setGet] = useState(null);

    /*useEffect(()=>{
        Axios.get('http://localhost:3001/Profesores').then((response)=>{
            setGet(response.data);
        });
    },[]);

    if(!get) return null;*/
    

    const submit = ()=>{
        Axios.post("http://localhost:3001/ingresaAlumno",{
            nombre: nombre,
            apellido: apellido,
        }).then(()=>{
            alert("Registro Exitoso");
        });
    };
        return(
            <Fragment>
        <div className='container'>
            <h1>Ingresa Alumno</h1>
            <div className='form'>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre' id='nombre' onChange={(e)=>{
                    setNombre(e.target.value)
                }} />
                <label htmlFor='apellido'>Apellido</label>
                <input type='text' name='apellido' id='apellido' onChange={(e)=>{
                    setApellido(e.target.value);
                }} />
                <br/>
                <button type='submit' onClick={submit}>Guardar</button>
            </div>
        </div> 
        </Fragment>       
    );
}
export default FormAlumno;