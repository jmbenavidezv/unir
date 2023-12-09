import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from './../Global';

//Se crea función para mostrar el detalle de los libros
const DetailsBooks = (props) => {
    const [bookDetails, setBookDetails] = useState({});
    const [status, setStatus] = useState(false);

    const showBooks = () => {

        //Llamado a API Json que contiene data de libros
        const url = Global.urlLibrary + `/books/${props.id}`;
             
        axios.get(url)
            .then((res) => {
                setBookDetails(res.data);
                setStatus(true);
            })
            .catch((error) => {
                console.error('Error Consultando Información:', error);
                setStatus(false);
            });
    };

    useEffect(() => {
        showBooks();        
    }, [props.id]);

    //Presentación del detalle del libro
    return (
        <div>
            <h1>
                <u>Detalles de Libro:  {props.id}- {bookDetails.nombre} </u>
            </h1>
            <br />
            <h3>
                Nombre:{' '}
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                    {bookDetails.nombre || ''}
                </span>
            </h3>
            <h3>
                Autor:{' '}
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                    {bookDetails.autor || ''}
                </span>
            </h3>
            <h3>
                Genero:{' '}
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                    {bookDetails.genero || ''}
                </span>
            </h3>
            <h3>
                Cantidad:{' '}
                <span style={{color: 'green', fontWeight: 'bold'}}>
                    {bookDetails.cantidad || ''}
                </span>

            </h3>
            
        </div>
    );
};

export default DetailsBooks;
