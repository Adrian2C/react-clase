//Comando de react RAFCE

import React from 'react';
import './style/estilos.css';/* importar hoja de estilos */
import '../EstilosGenerales.css';
import logo from '../assets/react.svg' /* import + elijo palabra descriptiva +from ..*/


const Nav = ({ countItem }) => {

  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
      <ul>
        <img src={logo} />
        <li ><a href="#">Inicio</a></li>
        <li>Acerca De</li>
        <li>Contacto</li>
        <li>Carrito:{countItem}</li>
      </ul>
    </nav>
  )
}

export default Nav
