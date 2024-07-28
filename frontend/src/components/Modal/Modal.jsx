// src/components/Modal/Modal.js
import PropTypes from 'prop-types'; // Importa PropTypes para validação de propriedades
import React from 'react'; // Importa React para criar componentes
import formatCurrency from '../../utils/formatCurrency'; // Importa a função de formatação de moeda
import './Modal.css'; // Importa o arquivo CSS para estilização do componente

function Modal({ onClose, discount, finalPrice, cartItems, totalPrice }) { // Define o componente funcional Modal com as propriedades recebidas
  console.log('Modal props:', { discount, finalPrice, cartItems, totalPrice }); // Loga as propriedades recebidas no console

  return (
    <div className="modal-overlay"> // Div principal para a sobreposição do modal
      <div className="modal-content"> // Div principal para o conteúdo do modal
        <button className="modal-close-button" onClick={onClose}> // Botão para fechar o modal
          &times; // Texto do botão (símbolo de fechar)
        </button>
        <div className="cart-modal-items"> // Div para listar os itens do carrinho
          {cartItems.map((cartItem) => ( // Mapeia os itens do carrinho para exibi-los
            <div key={cartItem.id} className="cart-modal-item"> // Div para cada item do carrinho, com chave única
              <span>{cartItem.name}</span> // Exibe o nome do item
              <span>{formatCurrency(cartItem.price, 'BRL')}</span> // Exibe o preço do item formatado
            </div>
          ))}
        </div>
        <div className="cart-modal-summary"> // Div para o resumo do carrinho
          <div className="cart-modal-total"> // Div para o total do carrinho
            <span>Total:</span>
            <span>{formatCurrency(totalPrice, 'BRL')}</span> // Exibe o preço total formatado
          </div>
          <div className="cart-modal-discount"> // Div para o desconto aplicado
            <span>Desconto:</span>
            <span>{formatCurrency(discount, 'BRL')}</span> // Exibe o desconto formatado
          </div>
          <div className="cart-modal-final"> // Div para o preço final após desconto
            <span>Preço Final:</span>
            <span>{formatCurrency(finalPrice, 'BRL')}</span> // Exibe o preço final formatado
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = { // Define propTypes para validação das propriedades do componente
  onClose: PropTypes.func.isRequired, // onClose deve ser uma função e é obrigatório
  discount: PropTypes.number.isRequired, // discount deve ser um número e é obrigatório
  finalPrice: PropTypes.number.isRequired, // finalPrice deve ser um número e é obrigatório
  cartItems: PropTypes.array.isRequired, // cartItems deve ser um array e é obrigatório
  totalPrice: PropTypes.number.isRequired, // totalPrice deve ser um número e é obrigatório
};

export default Modal; // Exporta o componente Modal como padrão
