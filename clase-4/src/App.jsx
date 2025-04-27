import React, { useState } from 'react'
import './EstilosGenerales.css'
import Home from './layout/Home';

//la funcion aparece en App, xq va a aparecer en todos los componentes y painas
function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }
  return (
    <>
      <Home cart={cart} handleAddToCart={handleAddToCart} />
    </>
  )
}

export default App
