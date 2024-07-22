import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import Modal from '../Modal/Modal';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFinalizeDisabled, setIsFinalizeDisabled] = useState(false);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
    return totalPrice;
  };

  const handleFinalizeClick = async () => {
    setIsModalVisible(true);
    setIsFinalizeDisabled(true);
    await handleConfirmModal();
    setIsFinalizeDisabled(false);
  };

  const handleConfirmModal = async () => {
    try {
      const totalPrice = calculateTotalPrice(); // Preço total dos itens no carrinho

      const response = await fetch('http://localhost:8080/api/orders/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalAmount: totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate discount');
      }

      const data = await response.json();
      console.log('Discount data:', data);
      setDiscount(data.discountApplied);
      setFinalPrice(data.finalPrice);
    } catch (error) {
      console.error('Error calculating discount:', error);
      alert('Ocorreu um erro ao calcular o desconto. Por favor, tente novamente.');
    } finally {
      setIsModalVisible(true);
      setIsFinalizeDisabled(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setIsFinalizeDisabled(false);
  };

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">
        Total: {formatCurrency(totalPrice, 'BRL')}
      </div>
      <button className="finalizarButton" onClick={handleFinalizeClick} disabled={isFinalizeDisabled}>
        Finalizar
      </button>

      {isModalVisible && (
        <Modal
          onClose={handleCloseModal}
          onConfirm={handleConfirmModal}
          discount={discount}
          finalPrice={finalPrice}
          cartItems={cartItems}
          totalPrice={totalPrice}
        />
      )}
    </section>
  );
}

export default Cart;
