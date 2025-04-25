import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

import {productList} from '../utils/data';

const Home = () => {
    return (
        <>
            <Header />
            <Nav />
            <Main data={productList}/>
            <Footer />
        </>
    )
}

export default Home