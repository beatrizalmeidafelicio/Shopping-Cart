const fetchProducts = async (category) => {
  console.log('Buscando produtos para a categoria:', category);
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${category}`);
  const data = await response.json();
  return data.results;
};

export default fetchProducts;
