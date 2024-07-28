// src/components/Modal/Modal.js
import PropTypes from 'prop-types'; // Importa PropTypes para validação de propriedades
import React from 'react'; // Importa React para criar componentes
import formatCurrency from '../../utils/formatCurrency'; // Importa a função de formatação de moeda
import './Modal.css'; // Importa o arquivo CSS para estilização do componente

function Modal({ onClose, discount, finalPrice, cartItems, totalPrice }) { // Define o componente funcional Modal com as propriedades recebidas
  console.log('Modal props:', { discount, finalPrice, cartItems, totalPrice }); // Loga as propriedades recebidas no console

  return (
    <div className="modal-overlay"> 
      <div className="modal-content"> 
        <button className="modal-close-button" onClick={onClose}> 
          &times; 
        </button>
        <div className="cart-modal-items"> 
          {cartItems.map((cartItem) => ( 
            <div key={cartItem.id} className="cart-modal-item"> 
              <span>{cartItem.name}</span> 
              <span>{formatCurrency(cartItem.price, 'BRL')}</span> 
            </div>
          ))}
        </div>
        <div className="cart-modal-summary"> 
          <div className="cart-modal-total"> 
            <span>Total:</span>
            <span>{formatCurrency(totalPrice, 'BRL')}</span> 
          </div>
          <div className="cart-modal-discount"> 
            <span>Desconto:</span>
            <span>{formatCurrency(discount, 'BRL')}</span> 
          </div>
          <div className="cart-modal-final"> 
            <span>Preço Final:</span>
            <span>{formatCurrency(finalPrice, 'BRL')}</span> 
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
