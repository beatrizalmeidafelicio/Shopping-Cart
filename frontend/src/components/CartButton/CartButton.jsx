import React, { useContext } from 'react'; // Importa React e o hook useContext
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Importa o ícone de carrinho de compras da biblioteca react-icons

import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import './CartButton.css'; // Importa o arquivo CSS para estilização do componente

function CartButton() { // Define o componente funcional CartButton

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext); // Desestrutura cartItems, isCartVisible e setIsCartVisible do contexto da aplicação

  return (
    <button
      type="button"
      className="cart__button" // Define a classe CSS do botão
      onClick={ () => setIsCartVisible(!isCartVisible) } // Define a função de clique que alterna a visibilidade do carrinho
    >
      <AiOutlineShoppingCart /> // Renderiza o ícone de carrinho de compras
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> } // Renderiza o número de itens no carrinho se houver itens
    </button>
  );
}

export default CartButton; // Exporta o componente CartButton como padrão
