// Função assíncrona que busca produtos para uma categoria específica
const fetchProducts = async (category) => {
  // Loga a categoria que está sendo buscada no console
  console.log('Buscando produtos para a categoria:', category);
  
  // Realiza uma requisição GET à API do Mercado Livre para buscar produtos da categoria especificada
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${category}`);
  
  // Converte a resposta da requisição em um objeto JSON
  const data = await response.json();
  
  // Retorna a lista de produtos encontrada
  return data.results;
};

// Exporta a função fetchProducts para que possa ser utilizada em outros módulos
export default fetchProducts;
