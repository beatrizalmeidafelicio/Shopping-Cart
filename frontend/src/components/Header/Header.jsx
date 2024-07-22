import React from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import carrinho from './carrinho.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <img src={carrinho} alt="Ícone Carrinho" className="carrinho-img" />
          <h1>Shopping</h1>
        </div>
        <div className="header-right">
          <SearchBar />
          <CartButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
