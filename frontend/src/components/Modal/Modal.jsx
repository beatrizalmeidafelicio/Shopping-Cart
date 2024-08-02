import PropTypes from 'prop-types';
import React from 'react';
import formatCurrency from '../../utils/formatCurrency';
import './Modal.css';

//Este código define um componente, que exibe um modal (janela sobreposta) contendo um resumo dos itens do carrinho de compras, o desconto aplicado e o preço final. 

function Modal({ onClose, discount, finalPrice, cartItems, totalPrice }) {
  console.log('Modal props:', { discount, finalPrice, cartItems, totalPrice });
var id=1;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="cart-modal-items">
          {cartItems.map((cartItem) => (
            <div key={id++} className="cart-modal-item">
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  discount: PropTypes.number.isRequired,
  finalPrice: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Modal;
