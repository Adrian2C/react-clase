import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, stocks, resetAll }) => {
  return (
    <div className='galeria'>
      {products.map((product) => {
        const productoStock = stocks[product.id] ?? product.stock;
        const isSoldOut = productoStock === 0;
        return (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            productoStock={productoStock}
            isSoldOut={isSoldOut}
            resetCounter={resetAll}
          />
        );
      })}
    </div>
  );
};

export default ProductList;

/* import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ initialProducts, addToCart }) => {
  // Estado local para gestionar los productos y su stock
  const [products, setProducts] = useState(initialProducts);

  // Función para actualizar el stock cuando se agregue un producto
  const handleAddToCart = (productId, cantidad) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, stock: Math.max(product.stock - cantidad, 0) }
          : product
      )
    );
    // Aquí también puedes llamar a tu función addToCart si quieres que pase algo más
    addToCart(productId, cantidad);
  };

  return (
    <div className='galeria'>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={(cantidad) => handleAddToCart(product.id, cantidad)}
        />
      ))}
    </div>
  );
};

export default ProductList; */