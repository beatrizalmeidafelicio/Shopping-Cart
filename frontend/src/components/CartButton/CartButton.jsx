import React, { useContext } from 'react'; // Importa React e o hook useContext
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Importa o ícone de carrinho de compras da biblioteca react-icons

import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import './CartButton.css'; // Importa o arquivo CSS para estilização do componente

function CartButton() { // Define o componente funcional CartButton

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext); 

  return (
    <button
      type="button"
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <AiOutlineShoppingCart /> 
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> } 
    </button>
  );
}

export default CartButton; 
