import React from 'react'; // Importa React para criar componentes
import { BiLoaderAlt } from 'react-icons/bi'; // Importa o ícone de carregamento BiLoaderAlt da biblioteca react-icons

import './Loading.css'; // Importa o arquivo CSS para estilização do componente

function Loading() { // Define o componente funcional Loading
  return <BiLoaderAlt className="loading" />; // Renderiza o ícone BiLoaderAlt com a classe CSS "loading"
}

export default Loading; // Exporta o componente Loading como padrão
