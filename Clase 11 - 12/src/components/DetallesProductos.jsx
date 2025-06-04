import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/CartContext'


const DetallesProductos = () => {
  const { productos} = useContext(CartContext)
    
    const {id} = useParams()

    const product = productos.find(producto => producto.id == id)

  return (
    <div>
      <h1>Detalle del producto: {id}</h1>
      {product ? (<h2>{product.nombre}</h2>) : (<p>Producto no encontrado</p>)}
    </div>
  )
}

export default DetallesProductos
