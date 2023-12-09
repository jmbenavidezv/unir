import './App.css';
import {useState} from 'react';
//import formRegister from './components/formRegister';
import React from 'react'

const [userInfo, setUserInfo] = useState({
    name: "",
    autor: "",
    cantidad: "",
  });


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p>
          <h1>Biblioteca UNIR - Colombia </h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <formRegister />
       
   
      </header>
      <body className='App-body'>


      </body>



     
    </div>
    
  );
}


function FrmRegisterBook() {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
      };
     
      return (
        <form>
          <label htmlFor="name">Nombre Libro</label>
          <input
            name="name"
            type="text"
            value={userInfo.name}
            onChange={handleChange}
          />
     
          <label htmlFor="autor">Autor</label>
          <input
            name="autor"
            type="text"
            value={userInfo.autor}
            onChange={handleChange}
          />
     
          <label htmlFor="cantidad">Cantidad</label>
          <input
            name="cantidad"
            type="number"
            value={userInfo.cantidad}
            onChange={handleChange}
          />
     
          <input type="submit" />
        </form>
      );
     
}



export default App;
