import React from 'react'; // Importa React para criar componentes
import CartButton from '../CartButton/CartButton'; // Importa o componente CartButton
import SearchBar from '../SearchBar/SearchBar'; // Importa o componente SearchBar
import './Header.css'; // Importa o arquivo CSS para estilização do componente
import carrinho from './carrinho.png'; // Importa a imagem do carrinho

function Header() { // Define o componente funcional Header
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

export default Header; // Exporta o componente Header como padrão
