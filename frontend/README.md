# Carrinho de Compras com React JS

Este é um projeto de carrinho de compras desenvolvido com React JS. Ele permite listar produtos na tela, buscar produtos consumindo a API do Mercado Livre, adicionar produtos e remover produtos do carrinho.

## Funcionalidades

- Listagem de produtos: exibe uma lista de produtos obtidos da API do Mercado Livre.
- Busca de produtos: permite pesquisar produtos com base em palavras-chave, consumindo a API do Mercado Livre para obter os resultados.
- Adição de produtos ao carrinho: permite adicionar produtos ao carrinho de compras.
- Remoção de produtos do carrinho: possibilita remover produtos do carrinho de compras.

## Tecnologias utilizadas

- React JS: biblioteca JavaScript para construção de interfaces de usuário.
- HTML5: linguagem de marcação para estruturar o conteúdo da aplicação.
- CSS3: linguagem de estilo para estilizar a interface do usuário.
- API do Mercado Livre: utilizada para obter dados de produtos.

## Como o projeto frontend foi desenvolvido

- React é a biblioteca JavaScript usada para construir a interface do usuário (UI) da aplicação, foi utulizado nos componentes funcionais:(como App, Provider, Products, Header, etc.) são componentes funcionais, utilizando hooks como useState, useEffect, e useContext para gerenciar estado e efeitos colaterais.

- React-router-dom é usado para gerenciar a navegação entre diferentes páginas da aplicação.

- Axios é usado para fazer requisições HTTP e buscar dados da API.

- ESLint é uma ferramenta para JavaScript e JSX (usada em projetos React), que analisa o código em busca de problemas e padrões que não seguem as regras definidas. Essas regras podem ajudar a identificar erros, potenciais bugs, inconsistências no estilo de código e outros problemas que podem ser difíceis de detectar manualmente.

## Hooks e padrões de design React

- propTypes: funcionalidade do React que permite validar os tipos de propriedades passadas para componentes, que ajuda a garantir que os componentes recebam os tipos de dados esperados, melhorando a legibilidade do código. Foi usado no CartItem: (propTypes.object.isRequired é usado para garantir que a propriedade data passada ao componente CartItem seja um objeto e que seja obrigatória); e no ProductCard: (propTypes.shape é utilizado para definir que a propriedade data deve ser um objeto com uma forma específica. Especificamente, o objeto data deve conter as propriedades title, thumbnail, e price, com seus respectivos tipos (string e number), e todas são obrigatórias.)

- Event Listeners: manipulação de eventos como o envio de formulários, feito co cadastro.

- useEffect: execução de efeitos colaterais, usado no Products: (é utilizado aqui para buscar produtos da API assim que o componente é montado. Ele chama fetchProducts com o termo de pesquisa 'notebook' e atualiza o estado products e loading uma vez que os dados são recebidos); e usado no Cadastro:(é utilizado aqui para adicionar e remover o evento de submissão do formulário. Quando o componente é montado, o evento submit é adicionado ao formulário para tratar o cadastro do usuário. Quando o componente é desmontado, o evento submit é removido).

- useContext: acesso a contextos para compartilhar dados entre componentes, usado no CartButton:(é utilizado aqui para acessar o contexto do aplicativo e obter o estado do carrinho (cartItems) e a visibilidade do carrinho (isCartVisible). O botão de carrinho utiliza esses estados para exibir a quantidade de itens no carrinho e alternar a visibilidade do carrinho); no CartItem:(é utilizado aqui para acessar o contexto do aplicativo e obter o estado do carrinho (cartItems). O componente permite remover itens do carrinho atualizando o estado do carrinho); no ProductCard:(é utilizado aqui para acessar o contexto do aplicativo e obter o estado do carrinho (cartItems) e a função para atualizar o estado do carrinho (setCartItems)); e usado no Products:(useContext acessa products, setProducts, loading e setLoading do contexto AppContext para gerenciar o estado dos produtos e o estado de carregamento).

- useState: gerenciamento de estados locais em componentes funcionais, usado no Provider:(é utilizado aqui para gerenciar estados compartilhados na aplicação, como a lista de produtos (products), itens no carrinho (cartItems), estado de carregamento (loading) e visibilidade do carrinho (isCartVisible)); e usado no SeachBar:(é utilizado aqui para gerenciar o valor do campo de busca (searchValue), permitindo que o usuário digite e atualize o estado do campo de pesquisa).



