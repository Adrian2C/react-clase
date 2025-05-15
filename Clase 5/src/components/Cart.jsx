import React from 'react'

const Cart = ({ vaciarCarrito, cartItems, isOpen, onClose, borrarProducto }) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className="close-button">✕</button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-item">
              {cartItems.map((item, index) => (<>
                <li key={index} style={{ color: "black" }}>
                  {item.name} - ${item.price} - cant:{item.cantidad}
                  <button onClick={() => borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                </li>
              </>
              ))}
            </ul>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
