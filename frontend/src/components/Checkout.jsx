import axios from 'axios';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

function Checkout({ cartItems }) {
    const [showModal, setShowModal] = useState(false);
    const [finalPrice, setFinalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    const itemCount = cartItems.length;

    const handleCheckout = () => {
        axios.post('http://localhost:8080/api/orders/checkout', { totalAmount: totalPrice, itemCount: itemCount })
            .then(response => {
                console.log('Resposta da API:', response.data);
                setFinalPrice(response.data.finalPrice);
                setDiscount(response.data.discountApplied);
                setShowModal(true);
            })
            .catch(error => {
                console.error('Erro ao realizar o checkout:', error);
            });
    };

    return (
        <div>
            <button onClick={handleCheckout}>Checkout</button>
            {showModal && (
                <Modal 
                    onClose={() => setShowModal(false)} 
                    discount={discount} 
                    finalPrice={finalPrice} 
                    cartItems={cartItems} 
                    totalPrice={totalPrice} 
                />
            )}
        </div>
    );
}

export default Checkout;
