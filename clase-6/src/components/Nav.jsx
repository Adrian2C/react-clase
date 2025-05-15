import React from 'react'
import './style/Estilos.css'
import logo from '../assets/react.svg'
<<<<<<< HEAD
import Cart from './Cart'
import { Link } from 'react-router-dom'


const Nav = ({ vaciarCarrito, cartCount, cartItems, isCartOpen, setCartOpen, borrarProducto }) => {

  return (
    <nav style={{ backgroundColor: '#333', color: "white", padding: "10px" }}>
      <ul>
        <img src={logo} />
        <li><a href='#'>Inicio</a></li>
        <li><Link to='/acercade' >Acerca de</Link> </li>
        <li><Link to='/contacto'>Contacto</Link></li>
        <li>Carrito: {cartCount}</li>

        <li className='cartNav'>

          <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
          <Cart vaciarCarrito={vaciarCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} borrarProducto={borrarProducto} />
        </li>
      </ul>
=======

 const Nav = () => {

  return (
    <nav style={{backgroundColor:'#333', color:"white", padding:"10px"}}>
        <ul>
            <img src={logo}/>
            <li><a href='#'>Inicio</a></li>
            <li>Acerca de</li>
            <li>Contacto</li>
        </ul>
>>>>>>> 013bd3098f2863a9cc17e823e85ce048b36603fe
    </nav>
  )
}


export default Nav