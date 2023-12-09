import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from './../Global';
import { NavLink } from 'react-router-dom';

//Se crea función para mostrar listdo de libros
const Books = () => {
    const [books, setBooks] = useState([]);
    const [status, setStatus] = useState(false);

    //Se hace llamado al API para consultar los libros
        const loadBooks = () => {
        const url = Global.urlLibrary;
                
        axios.get(url + "/books")
            .then(res => {
                setBooks(res.data);
                setStatus(true);
            })
            .catch(error => {
                console.error('Error al cargar Información de libros:', error);
                setStatus(false);
            });
    };

    useEffect(() => {
        loadBooks();
    }, []);

    //Construcción de formulario con listado de libros, se implementa mediante tabla.
    return (
        <div>
            <br/>
            <h2>Listado de libros - Biblioteca UNIR</h2>
            
            <p>A continuación se listan los libros registrados en la biblioteca, si desea ver el Detalles
                haga clic en el enlace "Detalles", Si dese actualizarlo, haga clic en enlace "Modificar"
            </p>
            <table className="table table-info">
                <thead className="thead-dark">
                    <tr>
                        <th>Id Libro</th>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Genero</th>
                        <th>Cantidad</th>
                        <th>Detalles</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {status && books.map((book, i) => (
                        <tr key={i}>
                            <td>{book.id}</td>
                            <td style={{ fontWeight: "bold" }}>{book.nombre}</td>
                            <td>{book.autor}</td>
                            <td>{book.genero}</td>
                            <td>{book.cantidad}</td>
                            <td>
                                <NavLink to={`/FormDetails/${book.id}`}>Detalles</NavLink>
                            </td>
                            <td>
                                <NavLink to={`/FormUpdate/${book.id}`}>Modificar</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Books;
