import React from 'react'
import './style/Estilos.css'
import logo from '../assets/react.svg'
import Cart from './Cart'

const Nav = ({vaciarCarrito, cartCount,cartItems, isCartOpen, setCartOpen,borrarProducto }) => {

  return (
    <nav style={{ backgroundColor: '#333', color: "white", padding: "10px" }}>
      <ul>
        <img src={logo} />
        <li><a href='#'>Inicio</a></li>
        <li>Acerca de</li>
        <li>Contacto</li>
        <li>Carrito: {cartCount}</li>
        <li className='cartNav'>
          <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
          <Cart vaciarCarrito={vaciarCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} borrarProducto={borrarProducto} />
        </li>
      </ul>
    </nav>
  )
}


export default Nav