import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cadastro from './components/Cadastro/Cadastro';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';

function App() {
  return (
    <Router>
      <Provider>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Navigate to="/cadastro" />} />
          <Route path="/home" element={
            <>
              <Header />
              <Products />
              <Cart />
            </>
          } />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
