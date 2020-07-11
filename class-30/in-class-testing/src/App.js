import React from 'react';

import { Container, CssBaseline } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';

import CurrentCategory from './components/CurrentCategory';
import Categories from './components/Categories';
import Products from './components/Products';
import UnsplashSearcher from './components/UnsplashSearcher';

export default function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Categories />
                <CurrentCategory />
                <Products />
                <UnsplashSearcher />
            </Container>
            <Footer />
        </>
    );
}
