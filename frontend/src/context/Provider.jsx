import propTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

/*Este código define um componente Provider para gerenciar o estado global da aplicação usando o contexto do React (AppContext).
O Provider encapsula outros componentes e fornece acesso a vários estados e funções através do contexto.*/

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
