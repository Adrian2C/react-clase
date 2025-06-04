import React, {useState,useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'
import { CartContext } from '../../context/CartContext'

const Header = () => {
const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <nav>
        <ul>
            <li><Link to='/' className='link'>Inicio</Link></li>
            <li><Link to='/acercade' className='link'>Sobre nosotros</Link></li>
            <li><Link to='/productos' className='link'>Galeria de productos</Link></li>
            <li><Link to='/contacto' className='link'>Contacto</Link></li>
            <li className='cartnav'>
              <button className='btnCart' onClick={()=> setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
              <Cart isOpen={isCartOpen} onClose={()=> setCartOpen(false)}/>
            </li>
            <li className='btnLogin'>
              <Link to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></Link>
            </li>
            <li className='btnAdmin'>
              <Link to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
