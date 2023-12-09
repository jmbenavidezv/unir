import React, { useState } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

//Se crea función para actualizar toda la información del libro
const UpdateBook = (props) => {
    // Estado para controlar si se ha completado el registro correctamente
    const [status, setStatus] = useState(false);
    
    // Uso de useRef para hacer referencia a los campos del formulario
    const idBook = React.useRef();
    const nombreBook = React.useRef();
    const autorBook = React.useRef();
    const generoBook = React.useRef();
    const cantidadBook= React.useRef();
   
    const modifyBook = (e) => {
        e.preventDefault();
        const id = idBook.current.value;
        const nombreB = nombreBook.current.value;
        const autorB = autorBook.current.value;
        const generoB = generoBook.current.value;
        const cantB= cantidadBook.current.value;
        
        //Validar que no se guarden datos vacios
        if ( !nombreB || !autorB || !generoB) {
            console.error('Todos los campos son obligatorios.');
            return;
        }

        const book = {
            idBook: id,
            nombre: nombreB,
            autor: autorB,
            genero: generoB,
            cantidad: cantB
        };

        //Llamado a API Json que contiene data de libros para actualizar por Id.
        const url = Global.urlLibrary + `/books/${props.id}`;
        axios.put(url, book)
            .then(res => {
            setStatus(true);
          })
        .catch(error => {
         console.error('Error Actualizando Información:', error);
           setStatus(false);
        }); 
    };

    //Validación de estado para direccionar a página principal
    if (status === true) {
        return <Navigate to="/" />;
    }
    
    //Construcción de formulario de actualización
    return (
        <div>
            <h1>Actualizar Información de Libro: {props.id}</h1>
            <form onSubmit={modifyBook} style={{ width: "50%", margin: "auto" }}>
                <label>Número: </label>
                <input type="number" name="id" className="form-control" ref={idBook} value={props.id} readOnly />
                <label>Nombre: </label>
                <input type="text" name="nombre" className="form-control" ref={nombreBook}/>
                <label>Autor: </label>
                <input type="text" name="autor" className="form-control" ref={autorBook} />
                <label>Genero: </label>
                <input type="text" name="category" className="form-control" ref={generoBook} />
                <label>Cantidad</label>
                <input type="number" name="cantidad" className='form-control' ref={cantidadBook} />
                <br />
                <button className="btn btn-success">Modificar</button>
            </form>
        </div>
    );
};

export default UpdateBook;
