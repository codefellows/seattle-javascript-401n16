import React from 'react';

import ThemeContext from './context/theme.js';
import {Provider} from 'react-redux';

import store from "./store";

import Header from './components/header';
import Footer from './components/footer'
import Notes from './components/notes'

function App() {
  return (
    <ThemeContext>
      <Provider store={store}>
        <Header title="John's Amazing Demo" />
        <Notes />
        <Footer />
      </Provider>
    </ThemeContext>
  );
}

export default App;
