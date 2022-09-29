import react, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

function Profesores() {
  const [post, setPost] = react.useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/profesores").then((response)=>{
        console.log(response);
    });
  }, []);

  //if (!post) return null;

  return (
    <div>
      <p>{post.nombre}</p>
      <p>{post.apellido}</p>
    </div>

  );
}

export default Profesores;
/*
    <Fragment>
      <div>
        <p>{post.nombre}</p>
        <p>{post.apellido}</p>
      </div>
    </Fragment>
*/