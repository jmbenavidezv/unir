import React, { useState,useEffect } from "react";
import axios from 'axios';
import Global from "../Global";

/*Función para solicitar prestamo de libros, en este se hace llamado GET al json para cargar 
//listado de libro, y llamado POST para almacenar prestamo*/

const RequestBook = (props) => {
    const [status, setStatus] = useState(false);
    const [books, setBooks] = useState([]);

    const idBook = React.useRef();
    const Person = React.useRef();
    const Date = React.useRef();

    const NewRequestB = (e) => {
        e.preventDefault();
        const id = idBook.current.value;
        const PersonR = Person.current.value;
        const DateR = Date.current.value;

         //Validar que no se guarden datos vacios
         if ( !PersonR || !DateR) {
            console.error('Todos los campos son obligatorios.');
            return;
        }

        const requestData = { id, PersonR, DateR };
        const url = Global.urlLibrary + '/requestBook';

        axios.post(url, requestData)
            .then(res => {
                setStatus(true);
                
            })
            .catch(error => {
                console.error('Error Solicitando Prestamo:', error);
                setStatus(false);
            });
    };
    //Recorrido a data de libros para listarlos en combo selector.
    const fetchBooks = () => {
        const url2 = Global.urlLibrary;
              
        axios.get(url2 + "/books")
            .then(res => {
                setBooks(res.data);
            })
            .catch(error => {
                console.error('Error consultando libros:', error);
            });
    };

  
    useEffect(() => {
        fetchBooks(); // Obtener libros
    
    }, []);

    //Construcción de formulario de solicitud
    return (
        <div>
            <h1>Solicitud de Prestamo</h1>
            <form onSubmit={NewRequestB} style={{ width: "50%", margin: "auto" }}>
                <label>Seleccione Libro</label>
                <select name="books" className="form-control" ref={idBook}>
                    {books.map(element => (
                        <option key={element.id} value={element.id}>{element.nombre}</option>
                    ))}
                </select>
                <label>Ingrese Nombre: </label>
                <input type="text" name="namePerson" className="form-control" ref={Person}></input>
                <label>Seleccione Fecha de prestamo</label>
                <input type="date" name="date" className="form-control" ref={Date}></input>
                <br />
                <button className="btn btn-success">Retirar</button>
                {status === true && <p>Registro Exitoso!</p>}
            </form>
        </div>
    )
}

export default RequestBook;
