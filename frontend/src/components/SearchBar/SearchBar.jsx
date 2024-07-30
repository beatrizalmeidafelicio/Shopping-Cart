import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import './SearchBar.css';

//Este código define um componente React chamado SearchBar, que fornece uma barra de pesquisa para buscar produtos. 

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
