import React, { useContext, useEffect } from 'react';

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';

function Products() {
  // Obtém valores do contexto: produtos, função para atualizar os produtos, estado de carregamento e função para atualizar o estado de carregamento

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  
  // Hook useEffect para buscar produtos ao montar o componente
  useEffect(() => {
    fetchProducts('notebook').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;
