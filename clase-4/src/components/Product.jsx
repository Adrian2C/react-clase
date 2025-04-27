import React from 'react';
//este componente solo va a encargarse del area visual de los productos
const Product = ({ product, addToCart }) => {
    return (
        <div>
            {/* este va a traer los productos, su precio */}
            <span>{product.name} - ${product.price}</span>
            {/*  y el boton va a tener un texto qe diga agregar, y hacer funcionar la function de addToCart con el evento onClick */}
            <button onClick={() => addToCart(product)}> Agregar</button>
        </div>
    )
}

export default Product