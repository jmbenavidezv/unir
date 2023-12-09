import React, { useState } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

//Se crea función para registrar nuevos libros
const Form = () => {
    
    // Estado para controlar si se ha completado el registro correctamente
    const [status, setStatus] = useState(false);

    // Uso de useRef para hacer referencia a los campos del formulario
    const idBook = React.useRef();
    const nombreBook = React.useRef();
    const autorBook = React.useRef();
    const generoBook = React.useRef();
    const cantidadBook=React.useRef();    

    const newBook = (e) => {
        e.preventDefault();
        const id = parseInt(idBook.current.value);
        const nombreB = nombreBook.current.value || '';
        const autorB = autorBook.current.value || '';
        const generoB = generoBook.current.value || '';
        const cantB=cantidadBook.current.value || '';
        
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
            cantidad:cantB
        };
        //Llamado a API Json que contiene data de libros
        const url = Global.urlLibrary + '/Books';
        axios.post(url, book)
            .then(res => {
                // Cambiar el estado a true si el registro es exitoso
                setStatus(true);
            })
            .catch(error => {
                console.error('Error Registrando Información', error);
                setStatus(false);
            });
    };
    //Validación de estado para direccionar a página principal
    if (status === true) {
        return <Navigate to="/" />;
    }

    //Construcción de formulario de registro
    return (
        <div>
            <h1>Nuevo Libro</h1>
            <form onSubmit={newBook} style={{ width: "50%", margin: "auto" }}>
                <label>Número: </label>
                <input type="number" name="id" className="form-control" ref={idBook} readOnly />
                <label>Nombre: </label>
                <input type="text" name="nombre" className="form-control" ref={nombreBook} />
                <label>Director: </label>
                <input type="text" name="autor" className="form-control" ref={autorBook} />
                <label>Genero: </label>
                <input type="text" name="caterogy" className="form-control" ref={generoBook} />
                <label>Cantidad</label>
                <input type="number" name="cantidad" className='form-control' ref={cantidadBook}/>
                <br />
                <button className="btn btn-success">Añadir</button>
            </form>
        </div>
    );
};

export default Form;
