import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

import { productsList } from '../utils/data';
import ProductList from '../components/ProductsList'
import Cart from '../components/Cart'

const Home = ({ cart, handleAddToCart }) => {
    const countItem = cart.length
    return (
        <>
            <Header />
            <Nav countItem={countItem} />
            <Main />
            <ProductList products={productsList} addToCart={handleAddToCart} />
            <Cart cartItems={cart} />
            <Footer />
        </>
    )
}

export default Home