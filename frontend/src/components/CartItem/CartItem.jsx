import propTypes from 'prop-types'; // Importa propTypes para validação de propriedades
import React, { useContext } from 'react'; // Importa React e o hook useContext
import { BsCartDashFill } from 'react-icons/bs'; // Importa o ícone de remoção de item da biblioteca react-icons

import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import formatCurrency from '../../utils/formatCurrency'; // Importa a função de formatação de moeda
import './CartItem.css'; // Importa o arquivo CSS para estilização do componente

function CartItem({ data }) { // Define o componente funcional CartItem que recebe a propriedade data

  const { cartItems, setCartItems } = useContext(AppContext); // Desestrutura cartItems e setCartItems do contexto da aplicação
  const { id, thumbnail, title, price } = data; // Desestrutura id, thumbnail, title e price do objeto data

  const handleRemoveItem = () => { // Define a função para remover o item do carrinho
    const updatedItems = cartItems.filter((item) => item.id != id); // Filtra os itens do carrinho, removendo o item com o id correspondente
    setCartItems(updatedItems); // Atualiza o estado cartItems com os itens restantes
  };

  return (
    <section className="cart-item"> 
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image" 
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3> 
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3> 

        <button
          type="button"
          className="button__remove-item" 
          onClick={ handleRemoveItem } 
        >
          <BsCartDashFill /> 
        </button>
      </div>
    </section>
  );
}

export default CartItem; // Exporta o componente CartItem como padrão

CartItem.propTypes = { 
  data: propTypes.object.isRequired 
};
