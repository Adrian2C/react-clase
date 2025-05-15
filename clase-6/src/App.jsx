<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './layout/Home'
import NotFound from './components/NotFound'
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';



function App() {

  const [cart, setCart] = useState([])
  console.log(cart);


  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)

    if (productExist) {
      // alert('El producto ya esta en el carrito')
      setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item))
    } else {
      setCart([...cart, product])
    }
  }

  const borrarProducto = (product) => {

    setCart(preVCart => {
      return preVCart.map(item => {
        if (item.id === product.id) {
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 }
          } else {
            return null
          }
        } else {
          return item
        }
      }).filter(item => item != null)
    })

  }

  const vaciarCarrito = () => {
    setCart([])
=======

import './EstilosGenerales.css'
import Saludo from './components/Saludo'
import Botones from './components/Botones'
import ListaProductos from './components/ListaDeUsuarios'
import Tarjeta from './components/Tarjetas'
import Header from './components/Header'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  let productos = ['producto1', 'producto2', 'producto3', 'producto4']
  const promociones = [
    {
      id: 1,
      titulo: '¡Descuento de Verano!',
      descripcion: 'Aprovecha hasta un 50% de descuento en toda la tienda.',
      imagenUrl: 'https://placehold.co/200x200',
      enlace: '/descuentos-verano'
    },
    {
      id: 2,
      titulo: 'Envío Gratis',
      descripcion: 'Recibe tu pedido sin costo de envío en compras mayores a $50.',
      imagenUrl: 'https://placehold.co/200x200',
      enlace: '/envio-gratis'
    },
    {
      id: 3,
      titulo: 'Compra 1 y Llévate 2',
      descripcion: 'Llévate un producto gratis al comprar uno de nuestra selección.',
      imagenUrl: 'https://placehold.co/200x200',
      enlace: '/compra1llevate2'
    }
  ];


  const mostrarMensaje = (e) => {
    console.log(e.target.style.backgroundColor = 'red');

    console.log('hice Click')
>>>>>>> 013bd3098f2863a9cc17e823e85ce048b36603fe
  }

  return (
    <>
<<<<<<< HEAD
      <Router>
        <Routes>
          {/* hace que cuando tengas, el '/', se va a abrir x elemento */}
          <Route path='/' element={
            <Home error={error} carga={carga} productos={productos} cart={cart} vaciarCarrito={vaciarCarrito} handleAddToCart={handleAddToCart} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
          } />
          <Route path='/productos' element={
            <ProductList products={productos} cart={cart} vaciarCarrito={vaciarCarrito} AddToCart={handleAddToCart} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
          }
          />
          <Route path='/acercade' element={<AcercaDe />} />
          {/* el elemento error siempre va al final */}
          <Route path='/' element={<NotFound />} />
        </Routes>
      </Router>

    </>
=======
      <Header />
      <Nav />
      <button
        onClick={mostrarMensaje}
      >Ejemplo de guia
      </button>
      <Main />
      <Gallery />
      <Footer />
      {/* <Saludo name='emi' />
      <Botones texto='aceptar' color='blue' />
      <Botones texto='cancelar' color='red' />
      <Botones texto='Ver Mas' color='green' />
      <ListaProductos productos={productos} />
      <div className='tarjeta'>
        {
          promociones.map((promocion) =>
            <Tarjeta key={promocion.id} titulo={promocion.titulo}
              img={promocion.imagenUrl}
              descripcion={promocion.descripcion}
              botonTexto='Ver Más'
              botonColor='blue'
              />
          )
        } */}
    </>






>>>>>>> 013bd3098f2863a9cc17e823e85ce048b36603fe
  )
}

export default App
