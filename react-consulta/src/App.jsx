import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './EstilosGenerales.css'
import Saludo from './components/Saludo'
import Botones from './components/Botones'
import ListaProductos from './components/ListaDeUsuarios'
import Tarjeta from './components/Tarjetas'

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


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

  const mostrarMensaje =() => {
    console.log("hice click")
  }
  return (
    <>
    <Header/>
    <Nav/>
    <button
     onClick={mostrarMensaje}>Ejemplo de guia</button>
    <Main/>
    <Gallery/>
    <Footer/>
    </>
/*
    { <div>
      <Saludo name='emi' />
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
              // agregar boton que falta
              />
          )
        }
      </div>
    </div> }*/

  )
}

export default App
