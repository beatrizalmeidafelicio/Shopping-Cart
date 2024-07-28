// Importa o React e o hook useState da biblioteca React
import React, { useState } from 'react';
// Importa a biblioteca prop-types para verificação de tipos das props
import propTypes from 'prop-types';
// Importa o contexto AppContext previamente criado
import AppContext from './AppContext';

// Define o componente Provider que receberá children como prop
function Provider({ children }) {
  // Define o estado products com o valor inicial de um array vazio e uma função setProducts para atualizá-lo
  const [products, setProducts] = useState([]);
  // Define o estado cartItems com o valor inicial de um array vazio e uma função setCartItems para atualizá-lo
  const [cartItems, setCartItems] = useState([]);
  // Define o estado loading com o valor inicial de true e uma função setLoading para atualizá-lo
  const [loading, setLoading] = useState(true);
  // Define o estado isCartVisible com o valor inicial de false e uma função setIsCartVisible para atualizá-lo
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Define o objeto value que contém todos os estados e suas funções de atualização
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

  // Retorna o provedor de contexto com o valor definido acima, envolta dos children
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Define os tipos das props esperadas pelo componente Provider
Provider.propTypes = {
  // Espera um nó React como children e torna-o obrigatório
  children: propTypes.node.isRequired,
};

// Exporta o componente Provider para que possa ser utilizado em outras partes da aplicação
export default Provider;
