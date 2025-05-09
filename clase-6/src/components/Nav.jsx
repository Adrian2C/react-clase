import React from 'react'
import './style/Estilos.css'
import logo from '../assets/react.svg'

 const Nav = () => {

  return (
    <nav style={{backgroundColor:'#333', color:"white", padding:"10px"}}>
        <ul>
            <img src={logo}/>
            <li><a href='#'>Inicio</a></li>
            <li>Acerca de</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}


export default Nav