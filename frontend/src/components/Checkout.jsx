//Integração com back
import axios from 'axios'; // Importa o módulo axios para fazer requisições HTTP
import React, { useState } from 'react'; // Importa React e useState do React
import Modal from '../Modal/Modal'; // Importa o componente Modal localizado em '../Modal/Modal'

function Checkout({ cartItems }) {
    // Define estados locais usando useState
    const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
    const [finalPrice, setFinalPrice] = useState(0); // Estado para armazenar o preço final após o checkout
    const [discount, setDiscount] = useState(0); // Estado para armazenar o valor do desconto aplicado
    const [totalPrice, setTotalPrice] = useState(
        cartItems.reduce((acc, item) => acc + item.price, 0)
    ); // Estado para calcular o preço total dos itens no carrinho

    const itemCount = cartItems.length; // Calcula a quantidade de itens no carrinho

    // Função para lidar com o evento de checkout
    const handleCheckout = () => {
        // Faz uma requisição POST para 'http://localhost:8080/api/orders/checkout'
        axios.post('http://localhost:8080/api/orders/checkout', { 
            totalAmount: totalPrice,
            itemCount: itemCount
        })
            .then(response => {
                // Se a requisição for bem-sucedida, atualiza os estados com os dados da resposta
                console.log('Resposta da API:', response.data); // (para teste)
                setFinalPrice(response.data.finalPrice); // Atualiza o estado finalPrice com o preço final retornado pela API
                setDiscount(response.data.discountApplied); // Atualiza o estado discount com o desconto aplicado retornado pela API
                setShowModal(true); // Exibe o modal
            })
            .catch(error => {
                // Se houver um erro na requisição, loga o erro no console
                console.error('Erro ao realizar o checkout:', error);
            });
    };

    // Renderiza o componente
    return (
        <div>
            {/* Botão que dispara a função handleCheckout quando clicado */}
            <button onClick={handleCheckout}>Checkout</button>
            {/* Renderiza o modal se showModal for true */}
            {showModal && (
                <Modal 
                    onClose={() => setShowModal(false)} // Propriedade onClose para fechar o modal ao clicar fora dele
                    discount={discount} // Propriedade discount para passar o desconto aplicado para o modal
                    finalPrice={finalPrice} // Propriedade finalPrice para passar o preço final para o modal
                    cartItems={cartItems} // Propriedade cartItems para passar os itens do carrinho para o modal
                    totalPrice={totalPrice} // Propriedade totalPrice para passar o preço total para o modal
                />
            )}
        </div>
    );
}

export default Checkout; // Exporta o componente Checkout como padrão
