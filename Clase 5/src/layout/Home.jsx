import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import loading from '../assets/loading.gif';
import NotFound from '../components/NotFound';

const Home = ({ cart, handleAddToCart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(false);
  const [stocks, setStocks] = useState({}); // { id: stock }
  const [resetAll, setResetAll] = useState(false); // para resetear contadores

  useEffect(() => {
    fetch('https://6812b137129f6313e20f46e7.mockapi.io/productos-ecommerce/productos')
      .then(res => res.json())
      .then(datos => {
        setProductos(datos);
        const initStocks = {};
        datos.forEach(p => {
          initStocks[p.id] = p.stock;
        });
        setStocks(initStocks);
        setCarga(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
        setCarga(false);
      });
  }, []);

  const handleAddToCartWithStock = (product) => {
    if (stocks[product.id] > 0) {
      handleAddToCart(product);
      setStocks(prev => ({ ...prev, [product.id]: prev[product.id] - product.cantidad }));
      // Resetear los contadores de ese producto a 1 si hay stock
      setResetAll(prev => !prev); // toggle para recargar los componentes
    }
  };

  const handleRemoveFromCart = (product) => {
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
      // devuelve al stock la cantidad removida
      setStocks(prev => ({ ...prev, [product.id]: prev[product.id] + cartItem.cantidad}));
      // Resetear todos a 1 si hay stock
      setResetAll(prev => !prev);
    }
    borrarProducto(product);
  };

  const handleVaciar = () => {
    // Restablece todos los stocks a sus valores originales
    const initStocks = {};
    productos.forEach(p => { initStocks[p.id] = p.stock; });
    setStocks(initStocks);
    setResetAll(prev => !prev);
    vaciarCarrito();
  };

  if (error) return <NotFound />;

  return (
    <>
      <Header />
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <Main />
      {carga ? (
        <img src={loading} alt="loading" />
      ) : (
        <ProductList
          products={productos}
          addToCart={handleAddToCartWithStock}
          stocks={stocks}
          resetAll={resetAll}
        />
      )}
      <Cart cartItems={cart} />
      <Footer />
    </>
  );
};

export default Home;