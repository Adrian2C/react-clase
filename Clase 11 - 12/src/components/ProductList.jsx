import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'
const ProductList = () => {

    const { productos, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext)
    console.log(busqueda)

    return (
        <>
            <h2>Galeria de productos</h2>
            <input
                type='text'
                placeholder='buscar productos...'
                value={busqueda}
                onChance={(e) => setBusqueda(e.target.value)} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {
                    productosFiltrados.map(producto => (
                        <Productos key={producto.id} producto={producto} />
                    ))
                }
            </div>


        </>
    )
}

export default ProductList
