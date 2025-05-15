import React from 'react'
import Product from './Product'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

const ProductList = ({ carga, error, products, cart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, addToCart }) => {

  const cartCount = cart.length

  return (
    <>
      <Header />

      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
      <div className='galeria'>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default ProductList
