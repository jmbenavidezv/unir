import { useEffect, useState } from "react";
import Global from "../Global";
import axios from "axios";

export const useGetBooks =() => {
    const[books,setBooks]=useState([]);
    const[status,setStatus]=useState(false);

    useEffect(()=>{
        const url = Global.urlLibrary;

        axios
        .get(url +'/books')
        .then((res)=>{
            setBooks(res.data);
            setStatus(true);

        })
        .catch((error)=> {
            console.error('Error al cargar información de libros',error);
            setStatus(false);
        });

    },[]);
    return { books,status};


}