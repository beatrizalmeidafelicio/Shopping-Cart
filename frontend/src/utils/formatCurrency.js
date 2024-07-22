// utils/formatCurrency.js
const formatCurrency = (value, currency) => {
  if (value == null || currency == null) {
    console.error('Valor ou moeda não definidos:', value, currency);
    return 'N/A'; // Retorna 'N/A' ou uma mensagem de erro padrão
  }

  try {
    return value.toLocaleString('pt-BR', { style: 'currency', currency });
  } catch (error) {
    console.error('Erro ao formatar moeda:', error);
    return 'N/A'; // Retorna 'N/A' em caso de erro
  }
};

export default formatCurrency;
