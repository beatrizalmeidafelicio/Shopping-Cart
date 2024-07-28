// Importa a biblioteca React
import React from 'react';
// Importa a biblioteca ReactDOM para manipulação da árvore de componentes no DOM
import ReactDOM from 'react-dom/client';
// Importa o componente principal da aplicação, App
import App from './App';
// Importa o arquivo de estilos CSS global
import './index.css';

// Cria uma raiz React no elemento com o ID 'root' no HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação App dentro do modo estrito do React
root.render(
  <React.StrictMode>
    {/* O modo estrito do React ajuda a identificar problemas potenciais na aplicação */}
    <App />
  </React.StrictMode>
);
