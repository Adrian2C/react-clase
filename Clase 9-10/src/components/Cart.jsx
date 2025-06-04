import React from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'
const Cart = ({ cartItems, isOpen, onClose,borrarProducto }) => {
const { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated  } = useContext(CartContext)
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{color:'black'}}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (<p style={{ color: 'red' }}>El carrito esta vacío</p>) : (<ul className='cart-item'>
                    {cart.map((item,index)=>(
                        <>
                        <li key={item.id} style={{color:'black'}}>
                            {item.nombre} - {item.precio} - {item.cantidad} 
                            <button onClick={()=> borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                        </li>
                        </>
                    ))}
                </ul>)}

            </div>

        </div>
    )
}

export default Cart
