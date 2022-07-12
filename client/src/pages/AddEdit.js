import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast }from 'react-toastify'

import "./AddEdit.css";

const initialState = {
  nombre: "",
  aPaterno: "",
  contacto: "",
  resenia: ''
}

const AddEedit = () => {
  const [state, setState] = useState(initialState);
  const { nombre, aPaterno, contacto, resenia } = state;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    if( !nombre || !aPaterno || !contacto || !resenia) {
      console.log(nombre)
      console.log(aPaterno)
      console.log(contacto)
      console.log(resenia)
      toast.error("Faltan valores")
    }
    else {
      axios.post("http://localhost:5000/api/post", {
        nombre,
        aPaterno,
        contacto,
        resenia
      }).then(() => {
        setState({ nombre:"", aPaterno:"", contacto:"", resenia:"" })
      }).catch((err) => toast.error(err.response.data))
      toast.success("Info added successfully")
      setTimeout(() => navigate("/"), 500);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name]: value })
  }

  return(
    <div style={{ marginTop: "100px" }}>
      <form style={{ margin:"auto", padding: "15px", maxWidth: "400px", alignContent: "center" }} onSubmit={ handleSubmit }>
        <label htmlFor='nombre'>Nombre:</label>
        <input type='text' id="nombre" name='nombre' placeholder='Tu nombre' value={ nombre } onChange={ handleInputChange } />
        <label htmlFor='aPaterno'>Apellido Paterno:</label>
        <input type='text' id="aPaterno" name="aPaterno" placeholder='Tu apellido paterno' value={ aPaterno } onChange={ handleInputChange } />
        <label htmlFor='contacto'>Contacto:</label>
        <input type='text' id="contacto" name="contacto" placeholder='Correo o número de telefono' value={ contacto } onChange={ handleInputChange } />
        <label htmlFor='resenia'>Comentanos algo:</label>
        <textarea id="resenia" name="resenia" placeholder='Escribe algo...' value={ resenia } onChange={ handleInputChange } />
        <input type="submit" value="save" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  )
}

export default AddEedit;