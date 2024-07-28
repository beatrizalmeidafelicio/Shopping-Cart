import React, { useContext, useEffect, useState } from 'react'; // Importa React e hooks useContext, useState, useEffect
import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import formatCurrency from '../../utils/formatCurrency'; // Importa a função de formatação de moeda
import CartItem from '../CartItem/CartItem'; // Importa o componente CartItem
import Modal from '../Modal/Modal'; // Importa o componente Modal
import './Cart.css'; // Importa o arquivo CSS para estilização do componente

function Cart() { // Define o componente funcional Cart
  const { cartItems, isCartVisible } = useContext(AppContext); // Desestrutura cartItems e isCartVisible do contexto da aplicação
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [discount, setDiscount] = useState(0); // Estado para armazenar o valor do desconto
  const [finalPrice, setFinalPrice] = useState(0); // Estado para armazenar o preço final após o desconto
  const [totalPrice, setTotalPrice] = useState(0); // Estado para armazenar o preço total dos itens no carrinho
  const [isFinalizeDisabled, setIsFinalizeDisabled] = useState(false); // Estado para controlar a habilitação do botão de finalizar

  useEffect(() => { // useEffect para calcular o preço total quando cartItems mudar
    calculateTotalPrice(); // Chama a função para calcular o preço total
  }, [cartItems]); // Dependência do useEffect é cartItems

  const calculateTotalPrice = () => { // Função para calcular o preço total dos itens no carrinho
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0); // Soma o preço de todos os itens no carrinho
    setTotalPrice(totalPrice); // Atualiza o estado totalPrice
    return totalPrice; // Retorna o preço total
  };

  const handleFinalizeClick = async () => { // Função assíncrona chamada ao clicar no botão de finalizar
    setIsModalVisible(true); // Define isModalVisible como true para mostrar o modal
    setIsFinalizeDisabled(true); // Define isFinalizeDisabled como true para desabilitar o botão de finalizar
    await handleConfirmModal(); // Chama a função para confirmar o modal
    setIsFinalizeDisabled(false); // Define isFinalizeDisabled como false para habilitar o botão de finalizar
  };

  const handleConfirmModal = async () => { // Função assíncrona para confirmar a ação no modal
    try {
      const totalPrice = calculateTotalPrice(); // Calcula o preço total dos itens no carrinho

      const response = await fetch('http://localhost:8080/api/orders/checkout', { // Faz uma requisição POST para calcular o desconto
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalAmount: totalPrice, // Envia o preço total no corpo da requisição
        }),
      });

      if (!response.ok) { // Verifica se a resposta não é ok
        throw new Error('Failed to calculate discount'); // Lança um erro se a resposta não for ok
      }

      const data = await response.json(); // Converte a resposta para JSON
      console.log('Discount data:', data); // Loga os dados de desconto no console
      setDiscount(data.discountApplied); // Atualiza o estado discount com o valor do desconto aplicado
      setFinalPrice(data.finalPrice); // Atualiza o estado finalPrice com o preço final após o desconto
    } catch (error) { // Captura erros na requisição
      console.error('Error calculating discount:', error); // Loga o erro no console
      alert('Ocorreu um erro ao calcular o desconto. Por favor, tente novamente.'); // Exibe um alerta de erro para o usuário
    } finally {
      setIsModalVisible(true); // Define isModalVisible como true para mostrar o modal
      setIsFinalizeDisabled(false); // Define isFinalizeDisabled como false para habilitar o botão de finalizar
    }
  };

  const handleCloseModal = () => { // Função para fechar o modal
    setIsModalVisible(false); // Define isModalVisible como false para esconder o modal
    setIsFinalizeDisabled(false); // Define isFinalizeDisabled como false para habilitar o botão de finalizar
  };

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}> // Seção do carrinho, adiciona a classe 'cart--active' se isCartVisible for true
      <div className="cart-items">
        {cartItems.map((cartItem) => ( // Mapeia os itens do carrinho para renderizar CartItem
          <CartItem key={cartItem.id} data={cartItem} /> // Renderiza o componente CartItem para cada item no carrinho
        ))}
      </div>

      <div className="cart-resume">
        Total: {formatCurrency(totalPrice, 'BRL')} // Exibe o preço total formatado em BRL
      </div>
      <button className="finalizarButton" onClick={handleFinalizeClick} disabled={isFinalizeDisabled}>
        Finalizar // Botão para finalizar a compra, chama handleFinalizeClick ao ser clicado, desabilitado se isFinalizeDisabled for true
      </button>

      {isModalVisible && ( // Renderiza o Modal se isModalVisible for true
        <Modal
          onClose={handleCloseModal} // Passa handleCloseModal para fechar o modal
          onConfirm={handleConfirmModal} // Passa handleConfirmModal para confirmar a ação no modal
          discount={discount} // Passa o valor do desconto para o modal
          finalPrice={finalPrice} // Passa o preço final para o modal
          cartItems={cartItems} // Passa os itens do carrinho para o modal
          totalPrice={totalPrice} // Passa o preço total para o modal
        />
      )}
    </section>
  );
}

export default Cart; // Exporta o componente Cart como padrão
