import React from 'react';

const ProductList = (products, addToCart) => {
    return (
        <div>
            {products.map(product => (
                <Product product={product} addToCard={addToCart} />
            ))}
        </div>
    )
}

export default ProductList;