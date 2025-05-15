import React from 'react'
import { useParams } from 'react-router-dom'

const ProductoDetalle = ({ productos }) => {

    console.log(productos)

    const { id } = useParams()

    /* vamos a buscar en los elementos de "productos", , y si el ID, del "product" es igual al producto que estamos buscando, entonces va a pasar lo siguiente" */
    const product = productos.find(producto => producto.id == id)

    return (
        <div>
            <h1>Detalle de producto : {id}</h1>

            {/* si producto existe, nos devolvera el elemento */}

            {product ? (<h2>{product.nombre}</h2>) : (<p>Producto no encontrado</p>)}
        </div>
    )
}

export default ProductoDetalle
