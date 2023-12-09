import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MenuLibrary extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <a className='navbar-brand' href='/'>
                    Menu
                </a>               
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <NavLink className='nav-link' to='/'>
                                Biblioteca 
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='FormRegister'>
                                Registrar Libro
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className= 'nav-link' to='RequestBook'>
                                Prestamo
                            </NavLink>

                        </li>                      
                    </ul>
                </div>
            </nav>
        );
    }
}
