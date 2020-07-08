import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import CurrentCategory from './components/CurrentCategory';
import Categories from './components/Categories';
import Products from './components/Products';

export default function App() {
    return (
        <>
            <Header />
            <Categories />
            <CurrentCategory />
            <Products />
            <Footer />
        </>
    );
}
