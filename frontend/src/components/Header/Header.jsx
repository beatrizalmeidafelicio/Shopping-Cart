import React from 'react'; // Importa React para criar componentes
import CartButton from '../CartButton/CartButton'; // Importa o componente CartButton
import SearchBar from '../SearchBar/SearchBar'; // Importa o componente SearchBar
import './Header.css'; // Importa o arquivo CSS para estilização do componente
import carrinho from './carrinho.png'; // Importa a imagem do carrinho

function Header() { // Define o componente funcional Header
  return (
    <header className="header"> // Elemento header com a classe CSS "header"
      <div className="container"> // Div com a classe CSS "container" para agrupar elementos
        <div className="header-left"> // Div com a classe CSS "header-left" para os elementos da esquerda
          <img src={carrinho} alt="Ícone Carrinho" className="carrinho-img" /> // Renderiza a imagem do carrinho com a classe CSS "carrinho-img"
          <h1>Shopping</h1> // Renderiza o título "Shopping"
        </div>
        <div className="header-right"> // Div com a classe CSS "header-right" para os elementos da direita
          <SearchBar /> // Renderiza o componente SearchBar
          <CartButton /> // Renderiza o componente CartButton
        </div>
      </div>
    </header>
  );
}

export default Header; // Exporta o componente Header como padrão
