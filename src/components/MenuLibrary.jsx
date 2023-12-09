import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente menú de biblioteca
const MenuLibrary = () => {
    return (
        // Barra de navegación hacia las diferentes opciones
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            
            <a className='navbar-brand' href='/'>
                Menu
            </a>
           
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                {/* Links de navegación */}
                <ul className='navbar-nav'>
                    {/* Link hacía listado de libros */}
                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/'>
                            Biblioteca
                        </NavLink>
                    </li>
                    {/* Link hacia registro de nuevos libros */}
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/FormRegister'>
                            Registrar Libro
                        </NavLink>
                    </li>
                    {/* Link hacia solicitudes*/}
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/RequestBook'>
                            Prestamo
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuLibrary;
