import React, { useState, useEffect } from 'react';

const Product = ({ product, addToCart, productoStock, isSoldOut, resetCounter }) => {
  const [cantidad, setCantidad] = useState(1);

  // Cuando resetCounter cambia, si hay stock, volver a 1
  useEffect(() => {
    if (resetCounter && productoStock > 0) {
      setCantidad(1);
    } else if (productoStock === 0) {
      setCantidad(0);
    }
  }, [resetCounter, productoStock]);

  const increase = () => {
    if (cantidad < productoStock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  return (
    <section className="product">
      <div className="fondoProducto" />
      <img src={product.imagen} alt={product.nombre} className="imagenTrago" />
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p>Stock: {productoStock}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <button
          onClick={decrease}
          style={{
            backgroundColor: '#e0e0e0',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={increase}
          disabled={isSoldOut}
          style={{
            backgroundColor: '#e0e0e0',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: isSoldOut ? 'not-allowed' : 'pointer',
          }}
        >
          +
        </button>
      </div>

      <button
        className="agregar"
        onClick={() => {
          addToCart({ ...product, cantidad });
        }}
        disabled={isSoldOut}
      >
        Agregar
      </button>
    </section>
  );
};

export default Product;


/* import React, { useState, useEffect } from 'react';

const Product = ({ product, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);

  // Actualizar cantidad máxima permitida según el stock
  useEffect(() => {
    if (cantidad > product.stock) {
      setCantidad(product.stock);
    }
    if (product.stock === 0) {
      setCantidad(1); // opcional, si quieres que vuelva a 1 cuando no hay stock
    }
  }, [product.stock]);

  const increase = () => {
    if (product.stock > 0 && cantidad < product.stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  const isOutOfStock = product.stock === 0;

  return (
    <section className="product">
      <div className="fondoProducto"></div>
      <img src={product.imagen} alt={product.nombre} className="imagenTrago" />
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p>Stock: {product.stock}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <button
          onClick={decrease}
          style={{
            backgroundColor: '#e0e0e0',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={increase}
          style={{
            backgroundColor: '#e0e0e0',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </div>

      <button
        className="agregar"
        disabled={isOutOfStock}
        onClick={() => {
          addToCart({ ...product, cantidad }); 
          // Puedes opcionalmente reiniciar cantidad a 1
          setCantidad(1);
        }}
      >
        {isOutOfStock ? 'Agotado' : 'Agregar'}
      </button>
    </section>
  );
};

export default Product; */