import React, { useContext, useEffect, useState } from 'react'; // Importa as dependências do React
import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import formatCurrency from '../../utils/formatCurrency'; // Importa a função utilitária para formatar a moeda
import CartItem from '../CartItem/CartItem'; // Importa o componente CartItem
import Modal from '../Modal/Modal'; // Importa o componente Modal
import './Cart.css'; // Importa o arquivo de estilos CSS para o componente

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext); // Obtém os itens do carrinho e a visibilidade do carrinho do contexto da aplicação
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [discount, setDiscount] = useState(0); // Estado para armazenar o desconto aplicado
  const [finalPrice, setFinalPrice] = useState(0); // Estado para armazenar o preço final após o desconto
  const [totalPrice, setTotalPrice] = useState(0); // Estado para armazenar o preço total dos itens no carrinho
  const [isFinalizeDisabled, setIsFinalizeDisabled] = useState(false); // Estado para desabilitar o botão de finalizar compra enquanto a operação está em andamento

  useEffect(() => {
    calculateTotalPrice(); // Calcula o preço total sempre que os itens do carrinho são atualizados
  }, [cartItems]);

  // Função para calcular o preço total dos itens no carrinho
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0); // Calcula a soma dos preços dos itens
    setTotalPrice(totalPrice); // Atualiza o estado com o preço total
    return totalPrice;
  };

  // Função para lidar com o clique no botão de finalizar compra
  const handleFinalizeClick = async () => {
    setIsModalVisible(true); // Exibe o modal
    setIsFinalizeDisabled(true); // Desabilita o botão de finalizar compra
    await handleConfirmModal(); // Chama a função para confirmar o modal e calcular o desconto
    setIsFinalizeDisabled(false); // Reabilita o botão de finalizar compra
  };

  // Função para confirmar o modal e calcular o desconto
  const handleConfirmModal = async () => {
    try {
      const totalPrice = calculateTotalPrice(); // Obtém o preço total dos itens no carrinho
      const itemCount = cartItems.length; // Obtém a quantidade de itens no carrinho

      // Faz uma requisição POST para a API de checkout para calcular o desconto
      const response = await fetch('http://localhost:8080/api/orders/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalAmount: totalPrice, // Envia o preço total
          itemCount: itemCount // Envia a quantidade de itens
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate discount'); // Lança um erro se a requisição falhar
      }

      const data = await response.json(); // Obtém a resposta em JSON
      console.log('Discount data:', data); // Loga os dados de desconto
      setDiscount(data.discountApplied); // Atualiza o estado com o desconto aplicado
      setFinalPrice(data.finalPrice); // Atualiza o estado com o preço final após o desconto
    } catch (error) {
      console.error('Error calculating discount:', error); // Loga o erro
      alert('Ocorreu um erro ao calcular o desconto. Por favor, tente novamente.'); // Exibe um alerta de erro
    } finally {
      setIsModalVisible(true); // Exibe o modal
      setIsFinalizeDisabled(false); // Reabilita o botão de finalizar compra
    }
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalVisible(false); // Oculta o modal
    setIsFinalizeDisabled(false); // Reabilita o botão de finalizar compra
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

      {isModalVisible && ( // Condicionalmente renderiza o modal se estiver visível
        <Modal
          onClose={handleCloseModal} // Função para fechar o modal
          discount={discount} // Passa o desconto aplicado para o modal
          finalPrice={finalPrice} // Passa o preço final para o modal
          cartItems={cartItems} // Passa os itens do carrinho para o modal
          totalPrice={totalPrice} // Passa o preço total para o modal
        />
      )}
    </section>
  );
}

export default Cart; // Exporta o componente Cart como padrão
