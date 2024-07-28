// Importando módulos e componentes necessários
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import './Cart.css';

// Definindo o componente Cart
function Cart() {
  // Usando o contexto do aplicativo para obter os itens do carrinho e a visibilidade do carrinho
  const { cartItems, isCartVisible } = useContext(AppContext);

  // Definindo estados locais para controlar a visibilidade do modal, desconto, preço final, preço total e desabilitação do botão de finalizar
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFinalizeDisabled, setIsFinalizeDisabled] = useState(false);

  // Usando o hook useEffect para recalcular o preço total sempre que os itens do carrinho mudarem
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  // Função para calcular o preço total dos itens no carrinho
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
    return totalPrice;
  };

  // Função para lidar com o clique no botão de finalizar compra
  const handleFinalizeClick = async () => {
    setIsModalVisible(true); // Mostra o modal
    setIsFinalizeDisabled(true); // Desabilita o botão de finalizar
    await handleConfirmModal(); // Chama a função de confirmação do modal
    setIsFinalizeDisabled(false); // Reabilita o botão de finalizar
  };

  // Função para lidar com a confirmação no modal
  const handleConfirmModal = async () => {
    try {
      const totalPrice = calculateTotalPrice(); // Calcula o preço total dos itens no carrinho

      // Faz uma requisição POST para a API de checkout, enviando o totalAmount
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
        throw new Error('Failed to calculate discount'); // Lança um erro se a resposta não for OK
      }

      const data = await response.json(); // Converte a resposta para JSON
      console.log('Discount data:', data); // Exibe os dados do desconto no console
      setDiscount(data.discountApplied); // Atualiza o estado do desconto
      setFinalPrice(data.finalPrice); // Atualiza o estado do preço final
    } catch (error) {
      console.error('Error calculating discount:', error); // Exibe o erro no console
      alert('Ocorreu um erro ao calcular o desconto. Por favor, tente novamente.'); // Mostra um alerta de erro
    } finally {
      setIsModalVisible(true); // Garante que o modal está visível
      setIsFinalizeDisabled(false); // Reabilita o botão de finalizar
    }
  };

  // Função para lidar com o fechamento do modal
  const handleCloseModal = () => {
    setIsModalVisible(false); // Oculta o modal
    setIsFinalizeDisabled(false); // Reabilita o botão de finalizar
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

// Exporta o componente Cart como a exportação padrão do módulo
export default Cart;
