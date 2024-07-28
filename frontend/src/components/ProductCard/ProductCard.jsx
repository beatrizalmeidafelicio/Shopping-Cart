import propTypes from 'prop-types'; // Importa prop-types para verificação de tipos de props
import React, { useContext } from 'react'; // Importa React e useContext para usar o hook de contexto
import { BsFillCartPlusFill } from 'react-icons/bs'; // Importa um ícone do pacote react-icons

import AppContext from '../../context/AppContext'; // Importa o contexto da aplicação
import formatCurrency from '../../utils/formatCurrency'; // Importa uma função de utilidade para formatar moeda
import './ProductCard.css'; // Importa o arquivo de estilos CSS específico para este componente

function ProductCard({ data }) {
  // Desestrutura as propriedades do objeto data
  const { title, thumbnail, price } = data;

  // Obtém os valores do contexto: itens do carrinho e função para atualizar os itens do carrinho
  const { cartItems, setCartItems } = useContext(AppContext);

  // Função para adicionar o produto ao carrinho
  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      {/* Exibe a imagem do produto, substituindo a letra inicial do nome do arquivo de imagem para "W" */}
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        {/* Exibe o preço do produto formatado em moeda BRL */}
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        {/* Exibe o título do produto */}
        <h2 className="card__title">{title}</h2>
      </div>

      {/* Botão para adicionar o produto ao carrinho, que chama handleAddCart ao ser clicado */}
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill /> {/* Ícone do carrinho */}
      </button>
    </section>
  );
}

export default ProductCard;

// Define os tipos das props esperadas pelo componente
ProductCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
  }).isRequired,
};
