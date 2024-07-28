import React, { useContext, useState } from 'react'; // Importa React, useState e useContext
import { BsSearch } from 'react-icons/bs'; // Importa o ícone de busca do pacote react-icons

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import './SearchBar.css';

function SearchBar() {
  // Obtém funções do contexto: setProducts para atualizar os produtos e setLoading para atualizar o estado de carregamento
  const { setProducts, setLoading } = useContext(AppContext);
  // Define o estado local para o valor da busca
  const [searchValue, setSearchValue] = useState('');

  // Função para lidar com a busca de produtos
  const handleSearch = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    setLoading(true); // Define o estado de carregamento como verdadeiro

    // Busca os produtos usando a função fetchProducts com o valor da busca
    const products = await fetchProducts(searchValue);

    // Atualiza os produtos e redefine o estado de carregamento e o valor da busca
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue} // Define o valor do input como o valor da busca
        placeholder="Buscar produtos" // Placeholder para o input
        className="search__input" // Classe CSS para o input
        onChange={({ target }) => setSearchValue(target.value)} // Atualiza o valor da busca ao mudar o input
        required // Define o campo como obrigatório
      />

      <button type="submit" className="search__button">
        <BsSearch /> {/* Ícone de busca */}
      </button>
    </form>
  );
}

export default SearchBar;
